import prisma from "../src/database/index";

async function main() {
  return await prisma.books.create({
    data: {
      title: " Awesome Book",
      author: " Awesome Author",
      publisher: " Awesome Publisher",
      purchaseDate: new Date("2020-01-01"),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
