import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 11,
        photo: "assets/img/no-image.png",
        name: "Mr. Nice",
        email: "test@test.com",
        storeId: "0000",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: true,
        admin: true
      },
      {
        id: 12,
        photo: "assets/img/no-image.png",
        name: "Narco",
        email: "test@test.com",
        storeId: "0001",
        lastLogin: "March 19, 2018",
        numberOfLogins: "23",
        role: "",
        active: false,
        admin: false
      },
      {
        id: 13,
        photo: "assets/img/no-image.png",
        name: "Bombasto",
        email: "test@test.com",
        storeId: "0002",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: true,
        admin: false
      },
      {
        id: 14,
        photo: "assets/img/no-image.png",
        name: "Celeritas",
        email: "test@test.com",
        storeId: "0003",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: true,
        admin: false
      },
      {
        id: 15,
        photo: "assets/img/no-image.png",
        name: "Magneta",
        email: "test@test.com",
        storeId: "0004",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: true,
        admin: false
      },
      {
        id: 16,
        photo: "assets/img/no-image.png",
        name: "RubberMan",
        email: "test@test.com",
        storeId: "0005",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "",
        active: false,
        admin: false
      },
      {
        id: 17,
        photo: "assets/img/no-image.png",
        name: "Dynama",
        email: "test@test.com",
        storeId: "0006",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: true,
        admin: false
      },
      {
        id: 18,
        photo: "assets/img/no-image.png",
        name: "Dr IQ",
        email: "test@test.com",
        storeId: "0007",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "",
        active: true,
        admin: false
      },
      {
        id: 19,
        photo: "assets/img/no-image.png",
        name: "Magma",
        email: "test@test.com",
        storeId: "0008",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "admin",
        active: false,
        admin: true
      },
      {
        id: 20,
        photo: "assets/img/no-image.png",
        name: "Tornado",
        email: "test@test.com",
        storeId: "0009",
        lastLogin: "March 19, 2018",
        numberOfLogins: "21",
        role: "",
        active: true,
        admin: false
      }
    ];

    const stores = [
      {
        id: 1,
        storeId: "0001",
        name: "Rembrandti",
        email: "test@test.com",
        phone: "020641943",
        address: "Rembrandti",
        city: "Amstelve",
        postalCode: "118ZL",
        region: "549 WG 5",
        assistant: ["assistant1@test.com", "assistant2@test.com"]
      },
      {
        id: 2,
        storeId: "0002",
        name: "Rembrandti",
        email: "test@test.com",
        phone: "020641943",
        address: "Rembrandti",
        city: "Amstelve",
        postalCode: "118ZL",
        region: "549 WG 5",
        assistant: ["assistant1@test.com", "assistant2@test.com"]
      },
      {
        id: 3,
        storeId: "0003",
        name: "Rembrandti",
        email: "test@test.com",
        phone: "020641943",
        address: "Rembrandti",
        city: "Amstelve",
        postalCode: "118ZL",
        region: "549 WG 5",
        assistant: ["assistant1@test.com", "assistant2@test.com"]
      }
    ];

    const articles = [
      {
        id: 1,
        name: "Leaf Rake",
        storeId: "0000",
        articleName: "GDN-0011",
        editDate: "March 19, 2018",
        type: "copy",
        week: "32",
        year: "2017",
        ready: true,
        status: "approve"
      },
      {
        id: 2,
        name: "Garden Cart",
        storeId: "0001",
        articleName: "GDN-0023",
        editDate: "March 18, 2018",
        type: "signature",
        week: "32",
        year: "2017",
        ready: true,
        status: "approve"
      },
      {
        id: 5,
        name: "Hammer",
        storeId: "0002",
        articleName: "TBX-0048",
        editDate: "May 21, 2018",
        type: "copy",
        week: "32",
        year: "2017",
        ready: false,
        status: "publish"
      },
      {
        id: 8,
        name: "Saw",
        storeId: "0003",
        articleName: "TBX-0022",
        editDate: "May 15, 2018",
        type: "signature",
        week: "28",
        year: "2017",
        ready: true,
        status: "decline"
      },
      {
        id: 10,
        name: "Video Game Controller",
        storeId: "0004",
        articleName: "GMG-0042",
        editDate: "October 15, 2018",
        type: "signature",
        week: "36",
        year: "2017",
        ready: true,
        status: "approve"
      },
      {
        id: 12,
        name: "Garden Cart",
        storeId: "0001",
        articleName: "GDN-0023",
        editDate: "March 18, 2018",
        type: "signature",
        week: "32",
        year: "2017",
        ready: true,
        status: "approve"
      },
      {
        id: 15,
        name: "Hammer",
        storeId: "0002",
        articleName: "TBX-0048",
        editDate: "May 21, 2018",
        type: "copy",
        week: "32",
        year: "2017",
        ready: false,
        status: "publish"
      },
      {
        id: 18,
        name: "Saw",
        storeId: "0003",
        articleName: "TBX-0022",
        editDate: "May 15, 2018",
        type: "signature",
        week: "28",
        year: "2017",
        ready: true,
        status: "decline"
      },
      {
        id: 20,
        name: "Video Game Controller",
        storeId: "0004",
        articleName: "GMG-0042",
        editDate: "October 15, 2018",
        type: "signature",
        week: "36",
        year: "2017",
        ready: true,
        status: "approve"
      },
      {
        id: 25,
        name: "Hammer",
        storeId: "0002",
        articleName: "TBX-0048",
        editDate: "May 21, 2018",
        type: "copy",
        week: "32",
        year: "2017",
        ready: false,
        status: "publish"
      },
      {
        id: 28,
        name: "Saw",
        storeId: "0003",
        articleName: "TBX-0022",
        editDate: "May 15, 2018",
        type: "signature",
        week: "28",
        year: "2017",
        ready: true,
        status: "decline"
      },
      {
        id: 21,
        name: "Video Game Controller",
        storeId: "0004",
        articleName: "GMG-0042",
        editDate: "October 15, 2018",
        type: "signature",
        week: "36",
        year: "2017",
        ready: true,
        status: "approve"
      }
    ];
    const articleDetails = [
      {
        id: 1,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 1,
        addEmail: true
      },
      {
        id: 2,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 2,
        addEmail: true
      },
      {
        id: 5,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 3,
        addEmail: true
      },
      {
        id: 8,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 4,
        addEmail: true
      },
      {
        id: 10,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 5,
        addEmail: true
      },
      {
        id: 12,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 6,
        addEmail: true
      },
      {
        id: 15,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 7,
        addEmail: true
      },
      {
        id: 18,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 4,
        addEmail: true
      },
      {
        id: 20,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 5,
        addEmail: true
      },
      {
        id: 25,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 6,
        addEmail: true
      },
      {
        id: 28,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 7,
        addEmail: true
      },
      {
        id: 21,
        supermarketName: "Albert Heijn",
        storeName: "Test Store name bladjfah",
        storeText:
          "Some text Some text Some text Some text Some text Some text Some text Some text Some text",
        logo: "assets/img/ahold-logo.png",
        titleImage: "assets/img/example-img.jpeg",
        articleText: "some text",
        ctaText: "button",
        ctaLink: "link",
        addLink: "true",
        regardsId: 7,
        addEmail: true
      }
    ];

    const signatureTypes = [
      {
        id: 1,
        signatureType: "Manager and Location",
        nameSupermarketManager: true,
        nameAssistantManager: false,
        title: true,
        street: true,
        houseNumber: true,
        cityAsTitle: false,
        city: true,
        phone: true,
        email: true,
        entrepreneur: false
      },
      {
        id: 2,
        signatureType: "Assistent​ ​manager​ ​+​ ​location",
        nameSupermarketManager: false,
        nameAssistantManager: true,
        title: true,
        street: true,
        houseNumber: true,
        cityAsTitle: false,
        city: true,
        phone: true,
        email: true,
        entrepreneur: false
      },
      {
        id: 3,
        signatureType: "City",
        nameSupermarketManager: false,
        nameAssistantManager: false,
        title: false,
        street: true,
        houseNumber: true,
        cityAsTitle: true,
        city: true,
        phone: true,
        email: true,
        entrepreneur: false
      },
      {
        id: 4,
        signatureType: "Street​ ​+​ ​housenumber​ ​+​ ​City",
        nameSupermarketManager: false,
        nameAssistantManager: false,
        title: false,
        street: true,
        houseNumber: true,
        cityAsTitle: false,
        city: true,
        phone: true,
        email: true,
        entrepreneur: false
      },
      {
        id: 5,
        signatureType: "Manager​ ​+​ ​Assistent​ ​+​ ​City",
        nameSupermarketManager: true,
        nameAssistantManager: true,
        title: false,
        street: true,
        houseNumber: true,
        cityAsTitle: true,
        city: true,
        phone: true,
        email: true,
        entrepreneur: false
      },
      {
        id: 6,
        signatureType: "Manager​ ​(ondernemer)​ ​+​ ​City",
        nameSupermarketManager: true,
        nameAssistantManager: false,
        title: false,
        street: true,
        houseNumber: true,
        cityAsTitle: false,
        city: true,
        phone: true,
        email: true,
        entrepreneur: true
      },
      {
        id: 7,
        signatureType: "Manager​ ​(ondernemer)​ ​+​ ​Asisstent​ ​+​ ​City",
        nameSupermarketManager: true,
        nameAssistantManager: true,
        title: false,
        street: true,
        houseNumber: true,
        cityAsTitle: false,
        city: true,
        phone: true,
        email: true,
        entrepreneur: true
      },
      {
        id: 8,
        signatureType: "Write​ ​your​ ​own​ ​signature",
        nameSupermarketManager: false,
        nameAssistantManager: false,
        title: false,
        street: false,
        houseNumber: false,
        cityAsTitle: false,
        city: false,
        phone: false,
        email: false,
        entrepreneur: false
      }
    ];

    const userSettings = [
      {
        id: 1,
        email: "raymond@yourzine.nl",
        phone: "",
        name: "Reymond Groos",
        role: "admin",
        assistant: "",
        storeASM: "store 1",
        storeId: "0001",
        profileImg: "",
        teamPhoto: ""
      }
    ];

    return {
      users,
      stores,
      articles,
      articleDetails,
      signatureTypes,
      userSettings
    };
  }
}
