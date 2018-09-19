use buckeroo;

db.dropDatabase();

db.items.insertMany([
    {
        description: "Complete PDA"
    },
    {
        description: "Congratulate Pat on becoming such a nice person"
    },
    {
        description: "Actually learn some freaking ponga"
    }
])