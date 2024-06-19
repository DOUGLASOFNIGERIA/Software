export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/Users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            }, 
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            }, 
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title: "settings",
        listItems: [
            {
                id: 1,
                title: "Maintenance",
                url: "/",
                icon: "settings.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];

export const topDealUsers = [
    {
        id:1,
        img: "https://media.istockphoto.com/id/1388644810/photo/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.webp?b=1&s=170667a&w=0&k=20&c=e_YS2VT3isx_yAiqFVcbiZFpkEOGxMzsQ0q-vd0C2TQ=",
        username: "Elva Mcdonald",
        email: "elva@gmal.com",
        amount: "3.688", 
    },
    {
        id:2,
        img: "https://media.istockphoto.com/id/1488627370/photo/laptop-remote-work-and-female-freelancer-working-on-a-creative-project-in-her-living-room-of.webp?b=1&s=170667a&w=0&k=20&c=hBpT-mkXRlMMbh-F0rvqNyVxbl65gdC29Gb2cueF7QQ=",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "$3.365",  
    },
    {
        id:3,
        img: "https://media.istockphoto.com/id/1840351851/photo/portrait-of-a-smiling-mature-woman-standing-in-her-apartment.webp?b=1&s=170667a&w=0&k=20&c=q3iVOnmNq46VJvhgy-OdN-6kRKkpD8xQF7wFg8GmUGk=",
        username: "Brent Reeves",
        email:"brent@gmail.com",
        amount: "2.900",    
    },
    {
        id:4,
        img:"https://media.istockphoto.com/id/1378996666/photo/portrait-of-friendly-young-man.webp?b=1&s=170667a&w=0&k=20&c=Zg7TW9DxrRhAE4ohVkCqrhnwhRdd0soJvAv54ohpPCM=",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "4.005",    
    },
    {
        id:5,
        img: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.webp?b=1&s=170667a&w=0&k=20&c=4QU0jt7Z7Gfdjxa5xsfqwEsKuN-WhKGGwV6tsrZpjgI=",
        username: "Juan Harringthon",
        email: "juan@gmail.com",
        amount: "8.004",    
    },
    {
        id:6,
        img:"https://media.istockphoto.com/id/1407012004/photo/cheerful-man-using-smartphone-and-laptop-at-home.webp?b=1&s=170667a&w=0&k=20&c=x3A9HiRlrh54PR9xzAkbCBBMnmjSt5fMXR7BioYaTmw=",
        username: "Angel Thomas",
        email:"angel@gmail.com",
        amount: "7.405"     
    },
    {
        id:7,
        img:"https://media.istockphoto.com/id/1473323104/photo/handsome-mid-adult-man-dressed-in-denim-shirt-screaming-and-cheerfully-pumping-fist-while.webp?b=1&s=170667a&w=0&k=20&c=sjTRpzGlQbPZUTwMAm9z2kHZXzKoGvPRt9XnyTjyxMc=",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "10.585"   
    },
];

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: 12.6,
    dataKey: "ratios",
    percentage: 14,
    chartData: [
        { name: "Sun", ratios: 400 },
        { name: "Mon", ratios: 600 },
        { name: "Tue", ratios: 500 },
        { name: "Wed", ratios: 700 },
        { name: "Thu", ratios: 400 },
        { name: "Fri", ratios: 500 },
        { name: "Sat", ratios: 450 },
    ],
};

export const chartBoxUser = {
    color: "#8814d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: 10.85,
    dataKey: "users",
    percentage: 74,
    chartData: [
        { name: "Sun", users: 100 },
        { name: "Mon", users: 150 },
        { name: "Tue", users: 550 },
        { name: "Wed", users: 220 },
        { name: "Thu", users: 120 },
        { name: "Fri", users: 190 },
        { name: "Sat", users: 400 },
    ],
};
export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: 108,
    dataKey: "products",
    percentage: 24,
    chartData: [
        { name: "Sun", products: 200 },
        { name: "Mon", products: 300 },
        { name: "Tue", products: 450 },
        { name: "Wed", products: 620 },
        { name: "Thu", products: 420 },
        { name: "Fri", products: 190 },
        { name: "Sat", products: 450 },
    ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$23",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 100 },
        { name: "Mon", revenue: 50 },
        { name: "Tue", revenue: 350 },
        { name: "Wed", revenue: 520 },
        { name: "Thu", revenue: 620 },
        { name: "Fri", revenue: 90 },
        { name: "Sat", revenue: 650 },
    ],
};


export const barChartBoxVisit = {
    title: "Total Visits",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mon",
            visit: 3000,
        },
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 2780,
        },
        {
            name: "Thu",
            visit: 1890,
        },
        {
            name: "Fri",
            visit: 4000,
        },
        {
            name: "Sat",
            visit: 3490,
        },
    ],

};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mon",
            profit: 3000,
        },
        {
            name: "Tue",
            profit: 2000,
        },
        {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Thu",
            profit: 1890,
        },
        {
            name: "Fri",
            profit: 4000,
        },
        {
            name: "Sat",
            profit: 3490,
        },
    ],

};
    
   