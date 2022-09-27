import { config } from "../config/EnvConfig";
import { Product } from "../interfaces";

function convertToSlug(name: string): string {
  name = name.replace(/^\s+|\s+$/g, ""); // trim
  name = name.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    name = name.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  name = name
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return name;
}

function dataFilter(data: any): Product[] {
  const dataFiltered = [];

  for (let i = 1; i < data.length; i++) {
    dataFiltered.push({
      slug: convertToSlug(data[i][0]),
      categoryRoute: convertToSlug(data[i][3]),
      name: data[i][0],
      art: parseInt(data[i][1]),
      price: data[i][2],
      category: data[i][3],
      stock: data[i][4] === "TRUE" ? true : false,
      imageID1: data[i][15],
      altImage1: data[i][6],
      imageID2: data[i][16],
      altImage2: data[i][8],
      imageID3: data[i][17],
      altImage3: data[i][10],
      imageID4: data[i][18],
      altImage4: data[i][12],
      imageID5: data[i][19],
      altImage5: data[i][14],
    });
  }

  return dataFiltered;
}

export async function getProducts(): Promise<Product[]> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.dashboardId}/values/A1:V100/?alt=json&key=${config.googleApiKey}`;

  const response = await fetch(url)
    .then<any[]>((data) => data.json())
    .then((response) => dataFilter(response.values));

  return response;
}
