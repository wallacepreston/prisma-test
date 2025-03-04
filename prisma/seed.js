const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional)
  await prisma.user.deleteMany({});
  
  // Create users
  const users = [
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
    },
    {
      name: 'Bob Smith',
      email: 'bob@example.com',
    },
    {
      name: 'Carol White',
      email: 'carol@example.com',
    },
    {
      name: 'Dave Brown',
      email: 'dave@example.com',
    },
    {
      name: 'Eve Davis',
      email: 'eve@example.com',
    },
    {
      name: 'Frank Miller',
      email: 'frank@example.com',
    },
    {
      name: 'Grace Wilson',
      email: 'grace@example.com',
    },
    {
      name: 'Heidi Thompson',
      email: 'heidi@example.com',
    },
    {
      name: 'Ivan Garcia',
      email: 'ivan@example.com',
    },
    {
      name: 'Julia Chen',
      email: 'julia@example.com',
    }
  ];

  // Insert each user
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Database has been seeded with 10 users');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma client connection
    await prisma.$disconnect();
  }); 