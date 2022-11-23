export function onRequest(context) {
  return new Response(
    JSON.stringify({
      response: {
        shoes: [
          {
            key: 1,
            title: "Asics",
            image:
              "https://assets.codepen.io/t-1/maksim-larin-jZyacqaR4iI-unsplash.jpg",
            alt: "a pair of blue and red ASICS sneakers",
            copyright: "Maksim Larin",
            price: "$65 USD",
            description:
              "Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.",
            freeShipping: true,
            colors: [
              { background: "#1DB0FE", name: "blue" },
              { background: "#EB3428", name: "red" },
              { background: "#222", name: "black" },
            ],
            quantitiyAvailable: 5,
            availableSizes: [6, 6.5, 7.5, 8, 9, 10],
          },
          {
            key: 2,
            title: "Adidas",
            image:
              "https://assets.codepen.io/t-1/daniel-storek-JM-qKEd1GMI-unsplash.jpg",
            alt: "a pair of white Adidas sneakers with red and blue trim",
            copyright: "Daniel Storek",
            price: "$30 USD",
            description: `Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek.`,
            colors: [
              {
                background:
                  "linear-gradient(135deg, #A1B986 0%, #95AB7C 49%, #32352F 51%, #000 100%)",
                name: "olive & black",
              },
              {
                background:
                  "linear-gradient(135deg, #1DB0FE 0%, #1DB0FE 49%, #32352F 51%, #000 100%)",
                name: "blue & black",
              },
              {
                background:
                  "linear-gradient(135deg, #f55a94 0%, #f55a94 49%, #32352F 51%, #000 100%)",
                name: "pink & black",
              },
            ],
            quantitiyAvailable: 5,
            availableSizes: [6, 7, 7.5, 8, 9],
          },
          {
            key: 3,
            title: "New Balance",
            image:
              "https://assets.codepen.io/t-1/felipepelaquim-6zO5VKogoZE-unsplash.jpg",
            alt: "a New Balance sneaker in olive drab with a black logo",
            copyright: "felipepelaquim",
            price: "$45 USD",
            description: `Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.`,
            colors: [
              {
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 15%, #7079C8 30%, #FFFFFF 45%, #FFFFFF 55%, #BC3F3F 70%, #FFFFFF 85%, #FFFFFF 100%)",
                name: "white with red and blue trim",
              },
              {
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 35%, #000 50%, #FFFFFF 65%, #FFFFFF 100%)",
                name: "white with black trim",
              },
            ],
            quantitiyAvailable: 1,
            availableSizes: [6],
            oneLeft: true,
          },
        ],
      },
    })
  );
}
