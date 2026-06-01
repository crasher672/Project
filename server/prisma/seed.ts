import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.skin.deleteMany(); // resets DB each run (optional but useful)

  await prisma.skin.createMany({
    data: [
      // 🟡 RIFLES
      {
        name: "AK-47 | Redline",
        weapon: "AK-47",
        rarity: "Classified",
        wear: "Field-Tested",
        type: "Gun",
        image: "/images/ak_redline.png",
        price: 12.5,
      },
      {
        name: "AK-47 | Neon Rider",
        weapon: "AK-47",
        rarity: "Covert",
        wear: "Minimal Wear",
        type: "Gun",
        image: "/images/ak_neonRider.png",
        price: 45,
      },
      {
        name: "M4A1-S | Hyper Beast",
        weapon: "M4A1-S",
        rarity: "Covert",
        wear: "Field-Tested",
        type: "Gun",
        image: "/images/m4_hyperBeast.png",
        price: 38,
      },
      {
        name: "M4A4 | Asiimov",
        weapon: "M4A4",
        rarity: "Classified",
        wear: "Battle-Scarred",
        type: "Gun",
        image: "/images/m4_asiimov.png",
        price: 25,
      },
      {
        name: "AWP | Asiimov",
        weapon: "AWP",
        rarity: "Covert",
        wear: "Field-Tested",
        type: "Gun",
        image: "/images/awp_asiimov.png",
        price: 85,
      },
      {
        name: "AWP | Redline",
        weapon: "AWP",
        rarity: "Classified",
        wear: "Minimal Wear",
        type: "Gun",
        image: "/images/awp_redline.png",
        price: 60,
      },

      // 🟢 PISTOLS
      {
        name: "Desert Eagle | Blaze",
        weapon: "Desert Eagle",
        rarity: "Covert",
        wear: "Factory New",
        type: "Gun",
        image: "/images/deagle_blaze.png",
        price: 90,
      },
      {
        name: "Glock-18 | Water Elemental",
        weapon: "Glock-18",
        rarity: "Classified",
        wear: "Minimal Wear",
        type: "Gun",
        image: "/images/glock_water.png",
        price: 18,
      },

      // 🔵 SMG
      {
        name: "USP-S | Kill Confirmed",
        weapon: "USP-S",
        rarity: "Covert",
        wear: "Field-Tested",
        type: "Gun",
        image: "/images/usp_killConfirmed.png",
        price: 35,
      },

      // 🔪 KNIVES (IMPORTANT)
      {
        name: "Karambit | Doppler",
        weapon: "Karambit",
        rarity: "Covert",
        wear: "Factory New",
        type: "Knife",
        image: "/images/karambit_doppler.png",
        price: 1200,
      },
      {
        name: "Butterfly Knife | Fade",
        weapon: "Butterfly Knife",
        rarity: "Covert",
        wear: "Factory New",
        type: "Knife",
        image: "/images/butterfly_fade.png",
        price: 1800,
      },
    ],
  });

  console.log("Seeded database successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });