// @ts-nocheck

import PrismaClientPkg from "@prisma/client"
const PrismaClient = PrismaClientPkg.PrismaClient;
const prisma = new PrismaClient()
let result;

export function load() {
    async function main() {

        // await prisma.user.create({
        //     data: {
        //         name: 'Alice',
        //         email: 'alice@prisma.io',
        //         posts: {
        //             create: { title: 'Hello World' },
        //         },
        //         profile: {
        //             create: { bio: 'I like turtles' },
        //         },
        //     },
        // })

        const allUsers = await prisma.user.findMany({

            include: {
                posts: true,
                profile: true,
            },
        })

        console.dir(allUsers, { depth: null })
        result = allUsers;
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e + "Some error occured")
            await prisma.$disconnect()
            process.exit(1)
        })

    return { result };
}