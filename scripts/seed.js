const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient;

const skills = [
  {
    title: "Design System",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "Databases",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odio eaque labore et illo aliquid possimus quidem officia veniam commodi. Explicabo perspiciatis nemo sunt ducimus, et dolore perferendis odit aut asperiores ut?"
  },
  {
    title: "UI/UX",
    description: "Vestibulum nec libero vel nulla finibus venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dui."
  },
  {
    title: "ReactJS",
    description: "Aenean ut commodo nulla. Suspendisse maximus mollis quam, sed aliquam magna sollicitudin at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac arcu sagittis, congue lectus et, iaculis ante. Proin sed."
  },
  {
    title: "Figma",
    description: "Ut efficitur, erat eu viverra iaculis, lacus dolor ullamcorper turpis, vitae maximus ex elit nec lorem. Duis sagittis, massa at finibus imperdiet, mi dolor suscipit tellus, eget pulvinar nisi arcu ut tortor."
  },
  {
    title: "Tailwind CSS",
    description: "Mauris non ex enim. Fusce et risus libero. Nulla at odio sit amet sapien aliquet elementum eu ut nisl. Curabitur diam magna, ullamcorper sit amet libero quis, porta rutrum mi. Duis auctor."
  },
  {
    title: "NextJS",
    description: "Nullam fringilla est elit, sit amet lobortis leo tempus ac. Mauris id nisi ante. Proin magna tellus, faucibus a viverra in, commodo in magna. Cras faucibus iaculis mauris eu cursus. Pellentesque ultricies."
  },
  {
    title: "ExpressJS",
    description: "Cras eget dolor quis nunc rhoncus laoreet sit amet quis risus. Aliquam rhoncus iaculis lacus ut malesuada. Mauris tincidunt est nec lacus placerat mattis. Nunc vitae est sit amet nibh euismod tempus."
  },
  {
    title: "PostgreSQL",
    description: "Morbi tincidunt vel nibh id vestibulum. Quisque fermentum neque ut augue auctor fringilla. Aliquam imperdiet viverra ullamcorper. Etiam diam tellus, bibendum in diam ac, malesuada lacinia nisi. Cras suscipit, nunc et pellentesque."
  },
  {
    title: "SQL",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "Core Java",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "Python",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "HTML & CSS",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "NodeJS",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "Javascript & Typescript",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
  {
    title: "Responsive Design",
    description: "Body Extra Large. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can gi"
  },
]

const experiences = [
  {
    title: "AppCon 2023",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odio eaque labore et illo aliquid possimus quidem officia veniam commodi. Explicabo perspiciatis nemo sunt ducimus, et dolore perferendis odit aut asperiores ut?",
  },
  {
    title: "Self Study",
    description: "Vestibulum nec libero vel nulla finibus venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dui.",
  },
  {
    title: "Farmacia Landrito",
    description: "Sit cillum nostrud do exercitation cupidatat. Et exercitation amet fugiat ad deserunt nisi Lorem quis nulla. Dolore laborum do minim mollit.",
  },
  {
    title: "Academe & Education",
    description: "Consectetur nulla magna ullamco adipisicing magna aute enim et enim fugiat non dolor. Eiusmod non eiusmod voluptate pariatur eu aliqua et fugiat qui qui enim id. Et ullamco aliqua occaecat id.",
  },
  {
    title: "HomeSchool Essentials",
    description: "Qui id ex laboris irure exercitation aliquip esse eiusmod adipisicing ad ut officia. Sint enim veniam magna nulla nostrud esse sint cillum. Veniam id Lorem consequat mollit adipisicing amet qui sint Lorem.",
  },
  {
    title: "Leadership Roles",
    description: "Cupidatat officia exercitation elit aliquip consequat deserunt reprehenderit velit dolore velit elit dolore mollit ad. Nisi consequat anim duis deserunt nulla Lorem est laborum anim. Id magna dolore anim elit ad culpa excepteur.",
  },
]

const certifications = [
  {
    title: "AppCon 2023",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odio eaque labore et illo aliquid possimus quidem officia veniam commodi. Explicabo perspiciatis nemo sunt ducimus, et dolore perferendis odit aut asperiores ut?",
  },
  {
    title: "Self Study",
    description: "Vestibulum nec libero vel nulla finibus venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dui.",
  },
  {
    title: "Farmacia Landrito",
    description: "Sit cillum nostrud do exercitation cupidatat. Et exercitation amet fugiat ad deserunt nisi Lorem quis nulla. Dolore laborum do minim mollit.",
  },
  {
    title: "Academe & Education",
    description: "Consectetur nulla magna ullamco adipisicing magna aute enim et enim fugiat non dolor. Eiusmod non eiusmod voluptate pariatur eu aliqua et fugiat qui qui enim id. Et ullamco aliqua occaecat id.",
  },
]

async function seedAboutMe() {
  console.log("Initiating seed");

  await prisma.skills.createMany({data: [...skills], skipDuplicates: true});
  console.log("Seeded Skills");

  await prisma.experiences.createMany({data: [...experiences], skipDuplicates: true});
  console.log("Seeded Experiences");

  await prisma.certifications.createMany({data: [...certifications], skipDuplicates: true});
  console.log("Seeded Certifications");

  console.log("Successefully Seeded Database");
}

seedAboutMe()
  .catch(e => {
    console.error(
      'An error occurred while attempting to seed the database:',
      e,
    );
  })