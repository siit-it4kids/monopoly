export default [
    {
        message: "Advance to Go (Collect $200)",
        money: 200,
        from: "bank",
        keepCard: false,
        move: "Go"
    },
    {
        message: "Bank error in your favor. Collect $200",
        money: 200,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "Doctor’s fee. Pay $50",
        money: -50,
        from: "own",
        keepCard: false,
        move: null
    },
    {
        message: "From sale of stock you get $50",
        money: 50,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "Get Out of Jail Free",
        money: 0,
        from: null,
        keepCard: true,
        move: null
    },
    {
        message: "Go to Jail. Go directly to jail, do not pass Go, do not collect $200",
        money: 0,
        from: null,
        keepCard: false,
        move: "jail"
    },
    {
        message: "Holiday fund matures. Receive $100",
        money: 100,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "Income tax refund. Collect $20",
        money: 20,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "It is your birthday. Collect $10 from every player",
        money: 10,
        from: "allPlayers",
        keepCard: false,
        move: null
    },
    {
        message: "Life insurance matures. Collect $100",
        money: 100,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "Pay hospital fees of $100",
        money: -100,
        from: "own",
        keepCard: false,
        move: null
    },
    {
        message: "Pay school fees of $50",
        money: -50,
        from: "own",
        keepCard: false,
        move: null
    },
    {
        message: "Receive $25 consultancy fee",
        money: 25,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "You are assessed for street repair. $40 per house. $115 per hotel",
        calculationFormula: {
            perHouse: -40,
            perHotel: -115
        },
        from: "own",
        keepCard: false,
        move: null
    },
    {
        message: "You have won second prize in a beauty contest. Collect $10",
        money: 10,
        from: "bank",
        keepCard: false,
        move: null
    },
    {
        message: "You inherit $100",
        money: 100,
        from: "bank",
        keepCard: false,
        move: null
    },
];