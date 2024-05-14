//AIzaSyAiP-nLNDOP8TwKmmZimb4j2c0gYdztP2M
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAiP-nLNDOP8TwKmmZimb4j2c0gYdztP2M
let el = document.getElementsByClassName("right_image")[0];

const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener("mousemove", handleMove);

function handleMove(e) {
  const xVal = e.layerX;
  const yVal = e.layerY;

  const yRotation = 20 * ((xVal - width / 2) / width);

  const xRotation = -20 * ((yVal - height / 2) / height);

  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  el.style.transform = string;
}

el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});

// hello code checker, i think you should fold book array
const book = [
  {
    volumeInfo: {
      title: "HTML en CSS - de basis",
      authors: ["Andree Hollander"],
      publishedDate: "2005",
      pageCount: 272,
      averageRating: 4.5,
      ratingsCount: 2,
      imageLinks: {
        medium: "../Images/one.jpeg",
      },
      language: "nl",
      previewLink:
        "http://books.google.nl/books?id=IS0tnVBwWF8C&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "What Is HTML Code?",
      authors: ["Patricia Harris, Ph.D."],
      publisher: "The Rosen Publishing Group, Inc",
      publishedDate: "2017-07-15",
      description:
        "Behind every website is a page of HTML code. Hypertext markup language is a scripting language and not a full programming language. However, it is still one of the most important coding systems in the world. This book shows readers how HTML provides the front end for even the biggest websites and gets them started on simple page design. Topics also include additional web languages and the future of HTML5. Readers will learn about the history of HTML code, as well as the key figures who made it possible.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1508155224",
        },
        {
          type: "ISBN_13",
          identifier: "9781508155225",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 24,
      printedPageCount: 26,
      dimensions: {
        height: "21.60 cm",
        width: "17.30 cm",
        thickness: "0.50 cm",
      },
      printType: "BOOK",
      categories: [
        "Juvenile Nonfiction / Computers / Programming",
        "Juvenile Nonfiction / Technology / How Things Work-Are Made",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=Mc5hDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72vyO1_PCv1HNRFRR3-g0sGuVPvwBwL54xmocuYasixC_a_h_6qESUnTc0dIrzzRO7qK4oja4ktoWhiTpzvDmkmdcaE4Ry2GMkkbUk9uFwhfdI3alDAMS3-DrP_SNcuqrmcMFrJ&source=gbs_api",
        medium: "../Images/two.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=Mc5hDwAAQBAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Web Standards Programmer's Reference",
      subtitle: "HTML, CSS, JavaScript, Perl, Python, and PHP",
      authors: ["Steven M. Schafer"],
      publisher: "John Wiley & Sons",
      publishedDate: "2007-03-31",
      description:
        "<ul> <li>This invaluable resource offers tutorials and real-world examples as well as thorough language references for Web markup languages (HTML/XHTML and CSS), and popular scripting languages (JavaScript, Perl, and PHP)</li> <li>Examines the role of JavaScript, CGI (with examples in Perl and Python), and PHP on the Web and shows how to best use them all</li> <li>Includes a valuable reference section on each technology that can be used for review and consultation</li> </ul>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0471757233",
        },
        {
          type: "ISBN_13",
          identifier: "9780471757238",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 840,
      printedPageCount: 843,
      dimensions: {
        height: "24.00 cm",
      },
      printType: "BOOK",
      categories: [
        "Computers / Languages / HTML",
        "Computers / Internet / General",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.6.0.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=TK9k_omW5mQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73bK9TIkbYBmn7qGv1bFnB-EeCm5SPmhF4yk7cxSFApnTZLg5JAJ-ZVD0rqKz82UP7YyEDd_jwqTWZAHHT2V94D-_dNfWk5g7I81N3cgQlnawojjrxVzw4QkB5oSzVBWfFowJo2&source=gbs_api",
        medium: "../Images/three.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=TK9k_omW5mQC&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Beginning HTML and CSS",
      authors: ["Rob Larsen"],
      publisher: "John Wiley & Sons",
      publishedDate: "2013-03-08",
      description:
        "<p><b>Everything you need to build websites with the newest versions of HTML and CSS</b></p> <p>If you develop websites, you know that the goal posts keep moving, especially now that your website must work on not only traditional desktops, but also on an ever-changing range of smartphones and tablets. This step-by-step book efficiently guides you through the thicket. Teaching you the very latest best practices and techniques, this practical reference walks you through how to use HTML5 and CSS3 to develop attractive, modern websites for today's multiple devices. From handling text, forms, and video, to implementing powerful JavaScript functionality, this book covers it all.</p> <ul> <li>Serves as the ultimate beginners guide for anyone who wants to build websites with HTML5 and CSS3, whether as a hobbyist or aspiring professional developer</li> <li>Covers the basics, including the different versions of HTML and CSS and how modern websites use structure and semantics to describe their contents</li> <li>Explains core processes, such as marking up text, images, lists, tables, forms, audio, and video</li> <li>Delves into CSS3, teaching you how to control or change the way your pages look and offer tips on how to create attractive designs</li> <li>Explores the jQuery library and how to implement powerful JavaScript features, such as tabbed content, image carousels, and more</li> </ul> <p>Get up to speed on HTML5, CSS3, and today's website design with this practical guide. Then, keep it on your desk as a reference!</p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1118416511",
        },
        {
          type: "ISBN_13",
          identifier: "9781118416518",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 672,
      printedPageCount: 817,
      dimensions: {
        height: "24.00 cm",
      },
      printType: "BOOK",
      categories: [
        "Computers / Languages / HTML",
        "Computers / Online Services",
        "Computers / Internet / General",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.3.3.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=QwnWLMtXU7cC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70hKc3PtH5Fs4jvyoDWkiQWxhBcmzriF7kTVNAHjY22_75HLXqeO95iilxotRO0sIbmYN4-w9GDgp0e3CDwcy1-WBmL0TYx-8fizviEsvZXpaskiWR_rV3cMo2oBX155_u-Np62&source=gbs_api",
        medium: "../Images/four.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=QwnWLMtXU7cC&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "20",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 29.99,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 29.99,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=QwnWLMtXU7cC&rdid=book-QwnWLMtXU7cC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 29990000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 29990000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "TCP/IP Sockets in Java",
      subtitle: "Practical Guide for Programmers",
      authors: ["Kenneth L. Calvert", "Michael J. Donahoo"],
      publisher: "Morgan Kaufmann",
      publishedDate: "2011-08-29",
      description:
        'The networking capabilities of the Java platform have been extended considerably since the first edition of the book. This new edition covers version 1.5-1.7, the most current iterations, as well as making the following improvements:The API (application programming interface) reference sections in each chapter, which describe the relevant parts of each class, have been replaced with (i) a summary section that lists the classes and methods used in the code, and (ii) a "gotchas" section that mentions nonobvious or poorly-documented aspects of the objects. In addition, the book covers several new classes and capabilities introduced in the last few revisions of the Java platform. New abstractions to be covered include NetworkInterface, InterfaceAddress, Inet4/6Address, SocketAddress/InetSocketAddress, Executor, and others; extended access to low-level network information; support for IPv6; more complete access to socket options; and scalable I/O. The example code is also modified to take advantage of new language features such as annotations, enumerations, as well as generics and implicit iterators where appropriate.Most Internet applications use sockets to implement network communication protocols. This book\'s focused, tutorial-based approach helps the reader master the tasks and techniques essential to virtually all client-server projects using sockets in Java. Chapter 1 provides a general overview of networking concepts to allow readers to synchronize the concepts with terminology. Chapter 2 introduces the mechanics of simple clients and servers. Chapter 3 covers basic message construction and parsing. Chapter 4 then deals with techniques used to build more robust clients and servers. Chapter 5 (NEW) introduces the scalable interface facilities which were introduced in Java 1.5, including the buffer and channel abstractions. Chapter 6 discusses the relationship between the programming constructs and the underlying protocol implementations in more detail. Programming concepts are introduced through simple program examples accompanied by line-by-line code commentary that describes the purpose of every part of the program. No other resource presents so concisely or so effectively the material necessary to get up and running with Java sockets programming.<ul> <li>Focused, tutorial-based instruction in key sockets programming techniques allows reader to quickly come up to speed on Java applications.</li> <li>Concise and up-to-date coverage of the most recent platform (1.7) for Java applications in networking technology.</li></ul>',
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0080568785",
        },
        {
          type: "ISBN_13",
          identifier: "9780080568782",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 192,
      printedPageCount: 193,
      dimensions: {
        height: "23.50 cm",
        width: "19.10 cm",
      },
      printType: "BOOK",
      categories: [
        "Computers / Networking / General",
        "Computers / Programming / General",
        "Computers / Networking / Network Protocols",
        "Computers / Design, Graphics & Media / Graphics Tools",
        "Computers / Internet / Web Programming",
      ],
      averageRating: 4,
      ratingsCount: 2,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.4.5.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=lfHo7uMk7r4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72wV5hkvUNvpQhmCNFBoXMOmS_t9w5KSBoiKKQymFFluSQ2E84X_A3yNDaUZr2QicpdZBxW0wCbDFeeECwMFGlwmQMiJq9Z45ueCtF4dn54hKR7opNd6dVz2axVs9MtA_HJoohV&source=gbs_api",
        medium: "../Images/five.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=lfHo7uMk7r4C&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "9",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 27.77,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 19.44,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=lfHo7uMk7r4C&rdid=book-lfHo7uMk7r4C&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 27770000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 19440000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Van slaaf tot vorst",
      subtitle: "historisch romantische schets uit de geschiedenis van Java",
      authors: ["Melati (van Java)"],
      publisher: "Blom & Olivierse",
      publishedDate: "1887",
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 443,
      printedPageCount: 204,
      dimensions: {
        height: "23.00 cm",
      },
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.4.5.0.full.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=YH1VAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE737cT_1RaLDfqtIa_ruJ3NDIoYYpFi6KtpvhgnCdSb3ARyUcaLHAicQ-tfF0syCkdtu88tVPXHVbK_fUkXcuFjSgVfGNlI9qT-5pQGYiPLqpi3X4EkFGbfHeL9n3XZQ7QYyAWuL&source=gbs_api",
        medium: "../Images/six.png",
      },
      language: "nl",
      previewLink:
        "http://books.google.nl/books?id=YH1VAAAAcAAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "FREE",
      isEbook: true,
      buyLink:
        "https://play.google.com/store/books/details?id=YH1VAAAAcAAJ&rdid=book-YH1VAAAAcAAJ&rdot=1&source=gbs_api",
    },
    accessInfo: {
      country: "NL",
      viewability: "ALL_PAGES",
      embeddable: true,
      publicDomain: true,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
        downloadLink:
          "http://books.google.nl/books/download/Van_slaaf_tot_vorst.epub?id=YH1VAAAAcAAJ&hl=&output=epub&source=gbs_api",
      },
      pdf: {
        isAvailable: true,
        downloadLink:
          "http://books.google.nl/books/download/Van_slaaf_tot_vorst.pdf?id=YH1VAAAAcAAJ&hl=&output=pdf&sig=ACfU3U3ObF4EK25pVPwOCN_MqSEFr_0xKA&source=gbs_api",
      },
      accessViewStatus: "FULL_PUBLIC_DOMAIN",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title:
        "Rapport van de Commissie tot onderzoek naar den toestand van het inlandsch onderwijs op Java",
      authors: [
        "Pieter Johannes Veth",
        "Comissie tot Onderzoek naar den Toestand van het Inlandsch Onderwijs op Java",
      ],
      publisher: "G.J. Thieme",
      publishedDate: "1869",
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 77,
      printedPageCount: 88,
      dimensions: {
        height: "22.00 cm",
      },
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.6.0.full.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=UapPAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71UXLyfTAlKyZ8gL-Vjm3iVrWEHG3GBrCN-P_VNZYhj453noV_3EkIx7ocY4HYWwi54m6Gz65IpVCFpoHJDELhmGkTdC4uk5kQsg5eicnhugQYGslPaGgR_I84TE_PZ3T9MrEd9&source=gbs_api",
        medium: "../Images/seven.png",
      },
      language: "nl",
      previewLink:
        "http://books.google.nl/books?id=UapPAAAAcAAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "FREE",
      isEbook: true,
      buyLink:
        "https://play.google.com/store/books/details?id=UapPAAAAcAAJ&rdid=book-UapPAAAAcAAJ&rdot=1&source=gbs_api",
    },
    accessInfo: {
      country: "NL",
      viewability: "ALL_PAGES",
      embeddable: true,
      publicDomain: true,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
        downloadLink:
          "http://books.google.nl/books/download/Rapport_van_de_Commissie_tot_onderzoek_n.epub?id=UapPAAAAcAAJ&hl=&output=epub&source=gbs_api",
      },
      pdf: {
        isAvailable: true,
        downloadLink:
          "http://books.google.nl/books/download/Rapport_van_de_Commissie_tot_onderzoek_n.pdf?id=UapPAAAAcAAJ&hl=&output=pdf&sig=ACfU3U3xlc_ACjLQ0Bow9-NwiFR514Ucmw&source=gbs_api",
      },
      accessViewStatus: "FULL_PUBLIC_DOMAIN",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Key Java",
      subtitle: "Advanced Tips and Techniques",
      authors: ["John Hunt", "Alexander G. McManus"],
      publisher: "Springer Science & Business Media",
      publishedDate: "1998-07-10",
      description:
        "Java is such a rapidly evolving language, it can be difficult for developers to keep abreast of developments. It has moved beyond a lnaguage used just for creating Web-based applets to one that is being used for developing serious applications. Key Java is intended for those who already know the Java language, the classes and the tools, but who want to get more out of Java. They are wanting to know about subjects such as good Java style for reusable components, about using Java beans, about the JDBC, about optimising their code, about testing their code appropriately and about using the IFC, tools and the new JFC. This book explores some of the more significant and exciting developments in Java. It covers techniques that will be fundamental to programmers developing significant applications in Java. Each of the self-contained chapters looks beyond the mechanics of coding applications and explores the concepts that will prove vital to getting the most out of the Java language.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "3540762590",
        },
        {
          type: "ISBN_13",
          identifier: "9783540762591",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 331,
      printedPageCount: 356,
      dimensions: {
        height: "23.50 cm",
        width: "15.50 cm",
        thickness: "0.80 cm",
      },
      printType: "BOOK",
      categories: [
        "Computers / Programming / General",
        "Computers / Programming Languages / General",
        "Computers / Information Technology",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.3.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=T-oY6jbgjs8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71zFLCH2YkzK2d4R6PVRIpeUKwIQmw20wImuNLOoD2hClqjNFJp-EDdoQb0btuPpbGvyEY0ZigcwabJ4hFp4DEwax-YW-LRClDjnIR8Qcygg5F5bHdKddrnHWompBlK1syd667I&source=gbs_api",
        medium: "../Images/eight.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=T-oY6jbgjs8C&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "MySQL",
      authors: ["Paul DuBois"],
      publisher: "Addison-Wesley",
      publishedDate: "2013-03-28",
      description:
        "<b>MySQL, Fifth Edition by Paul DuBois<br><i>The definitive guide to using, programming and administering MySQL 5.5 and MySQL 5.6 </i></b> <br> <br> <i>MySQL</i> provides a comprehensive guide to effectively using and administering the MySQL database management system (DBMS). <br> <br>Author Paul DuBois describes everything from the basics of getting information into a database and formulating queries, to using MySQL with PHP or Perl to generate dynamic web pages, to writing your own programs that access MySQL databases, to administering MySQL servers. The book also includes a comprehensive reference section providing detailed information on MySQL’s structure, language, syntax, and APIs. <br> <br>The fifth edition of this bestselling book has been meticulously revised and updated to thoroughly cover the latest features and capabilities of MySQL 5.5, as well as to add new coverage of features introduced with MySQL 5.6. <br> <br>MySQL is an open source relational database management system (DBMS) that has experienced a phenomenal growth in popularity and use. Known for its speed and ease of use, MySQL has proven itself to be particularly well-suited for developing database-backed websites and applications. MySQL runs on anything from modest hardware all the way up to enterprise servers, and its performance rivals any database system put up against it. <br> <br>Paul DuBois' <i>MySQL</i>, Fifth Edition, is the definitive guide to fully exploiting all the power and versatility of MySQL 5.5 and MySQL 5.6 <br> <b><br>Contents at a Glance</b> <br> <br> <b>Part I: General MySQL Use</b> <br>Chapter 1 Getting Started with MySQL <br>Chapter 2 Using SQL to Manage Data <br>Chapter 3 Data Types <br>Chapter 4 Views and Stored Programs <br>Chapter 5 Query Optimization <br> <br> <b>Part II: Using MySQL Programming Interfaces</b> <br>Chapter 6 Introduction to MySQL Programming <br>Chapter 7 Writing MySQL Programs Using C <br>Chapter 8 Writing MySQL Programs Using Perl DBI <br>Chapter 9 Writing MySQL Programs Using PHP <br> <br> <b>Part III: MySQL Administration</b> <br>Chapter 10 Introduction to MySQL Administration <br>Chapter 11 The MySQL Data Directory <br>Chapter 12 General MySQL Administration <br>Chapter 13 Security and Access Control <br>Chapter 14 Database Maintenance, Backups, and Replication <br> <br> <b>Part IV: Appendixes</b> <br>Appendix A Software Required to Use This Book <br>Appendix B Data Type Reference <br>Appendix C Operator and Function Reference <br>Appendix D System, Status, and User Variable Reference <br>Appendix E SQL Syntax Reference <br>Appendix F MySQL Program Reference <br> <br> <b><i>Online Appendixes:</i></b> <br> Appendix G C API Reference Appendix H Perl DBI API Reference <br>Appendix I PHP API Reference <p> </p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "013303853X",
        },
        {
          type: "ISBN_13",
          identifier: "9780133038538",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 1184,
      printedPageCount: 3134,
      printType: "BOOK",
      categories: ["Computers / Database Administration & Management"],
      averageRating: 2,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.6.6.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=JgFTUsIC0bUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73IAcVq41eDZc0JxjbMMoL1awtSXLqzRcjX-uH1Ixnivzx9H9BR7wHQftTCoTnnVHqaiEhQwsmt7xTGPeEj7OULdzb55hTFfLi_1BDB2RyOImJEbiwr8Q6iq7PYXQhM86B8-xD0&source=gbs_api",
        medium: "../Images/nine.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=JgFTUsIC0bUC&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "124",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 26.15,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 18.3,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=JgFTUsIC0bUC&rdid=book-JgFTUsIC0bUC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 26150000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 18300000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "MySQL Tutorial",
      authors: ["Luke Welling", "Laura Thomson"],
      publisher: "Sams Publishing",
      publishedDate: "2003-11-24",
      description:
        "<p>A concise introduction to the fundamentals of working with MySQL.</p> <p>MySQL is an open-source relational database management system that is rapidly growing in popularity. Known for its speed, reliability, and ease of use, MySQL has proven itself to be particularly well suited both for beginners and for experienced developers to create sophisticated database-backed Web sites and applications.</p> <p> <i>MySQL Tutorial</i> is a clear, concise introduction to the fundamental concepts and techniques of working with MySQL. It teaches the beginning MySQL user how to create and administer powerful databases that can be used at home, at work, and on the Web.</p> <p>Whether you are a novice to databases or a technical professional looking to find out more about how MySQL works, <i>MySQL Tutorial</i> efficiently guides you through the information you need in order to get started with MySQL and quickly become proficient.</p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0672333007",
        },
        {
          type: "ISBN_13",
          identifier: "9780672333002",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 288,
      printedPageCount: 375,
      dimensions: {
        height: "23.00 cm",
      },
      printType: "BOOK",
      categories: ["Computers / Database Administration & Management"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.1.2.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=quDJCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE723I15g1CBTsulmTML-vnaRx6tNNkem3zUH7LozATkyqeYnRfj7EGkBxlDfRuy6FkbcQm1RIvU_KoDhI1vAMqIezSC9kaVnJigARAHzf-F2XriWYH8q32Ja8JxjxOiKH1hqpMKB&source=gbs_api",
        medium: "../Images/ten.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=quDJCgAAQBAJ&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "3",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "MySQL Administrator's Guide",
      authors: ["MySQL AB"],
      publisher: "Pearson Education",
      publishedDate: "2004-07-26",
      description:
        "<p>If you are not already one of the 4 million plus users of the MySQL database, you will want to become one after reading this book. <i>MySQL Administrator's Guide</i> is the official guide to installing, administering and working with MySQL 5.0 and MySQL databases. Starting with the basics, you will learn to store, manage and retrieve data in a MySQL database and to eventually manipulate the code behind MySQL 5.0 to customize your database. With the clear examples and tips provided in this comprehensive learning guide, you can become a MySQL expert in no time.</p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0672332655",
        },
        {
          type: "ISBN_13",
          identifier: "9780672332654",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 696,
      printedPageCount: 776,
      printType: "BOOK",
      categories: ["Computers / Database Administration & Management"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "2.7.4.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=i9YVaD9-hcwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72y4BlftyEi06BH-WQSqj21NpLFOGSpUOLBb7zhT1y6YMuky7xTK2uqnV5c4NsomhCiFndmU7JE1tm6J7ZLfK7PNkTyZLDLlOHD8re7_UdIydCOoRsM8NUVV4E3yWvstz5PNCKb&source=gbs_api",
        medium: "../Images/eleven.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=i9YVaD9-hcwC&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "8",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Learning MySQL and MariaDB",
      subtitle: "Heading in the Right Direction with MySQL and MariaDB",
      authors: ["Russell J.T. Dyer"],
      publisher: '"O\'Reilly Media, Inc."',
      publishedDate: "2015-03-30",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1449362877",
        },
        {
          type: "ISBN_13",
          identifier: "9781449362874",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 408,
      printedPageCount: 408,
      printType: "BOOK",
      categories: [
        "Computers / Database Administration & Management",
        "Computers / Languages / SQL",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=Q0C3BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71Y-v9-YtVzwvy4re97SysF0OhaHnBNMW5cMSuWzd1C9ceMPUteqtxeKn7vun2hOS3G2Be4cyJekgjm_Zr8Fb-OQqnRnkd03CyVeYM23sW64sY3pJC2dOBeTC-BPszA38moRMWi&source=gbs_api",
        medium: "../Images/twe.png",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=Q0C3BwAAQBAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title:
        "The Impact of Innovative ICT Education and AI on the Pedagogical Paradigm",
      authors: ["Boris Aberšek"],
      publisher: "Cambridge Scholars Publishing",
      publishedDate: "2019-04-25",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1527533719",
        },
        {
          type: "ISBN_13",
          identifier: "9781527533714",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 171,
      printedPageCount: 172,
      printType: "BOOK",
      categories: [
        "Education / General",
        "Computers / Online Services",
        "Computers / Internet / General",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=yBaVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70MCp-ICbcOMxJKkMakPTQ5zXB-LWF3LRw0Kd7HZxI79YaPEnzZIgEF8QHsOh-mZTGTa6HcKNz9-sEk6dXNad6SKD-WOJ17B28wSsSAbr4a56JuVh0dkbaCXKa0HmKyBUxL33WF&source=gbs_api",
        medium: "../Images/ter.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=yBaVDwAAQBAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 90.49,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 90.49,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=yBaVDwAAQBAJ&rdid=book-yBaVDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 90490000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 90490000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "AI Factory",
      subtitle: "Theories, Applications and Case Studies",
      authors: ["Ramin Karim", "Diego Galar", "Uday Kumar"],
      publisher: "CRC Press",
      publishedDate: "2023-05-24",
      description:
        "<p>This book provides insights into how to approach and utilise data science tools, technologies, and methodologies related to artificial intelligence (AI) in industrial contexts. It explains the essence of distributed computing and AI technologies and their interconnections. It includes descriptions of various technology and methodology approaches and their purpose and benefits when developing AI solutions in industrial contexts. In addition, this book summarises experiences from AI technology deployment projects from several industrial sectors.</p> <p></p> <p>Features:</p> <ul> <p> <li>Presents a compendium of methodologies and technologies in industrial AI and digitalisation.</li> <p></p> <p> <li>Illustrates the sensor-to-actuation approach showing the complete cycle, which defines and differentiates AI and digitalisation.</li> <p></p> <p> <li>Covers a broad range of academic and industrial issues within the field of asset management.</li> <p></p> <p> <li>Discusses the impact of Industry 4.0 in other sectors.</li> <p></p> <p> <li>Includes a dedicated chapter on real-time case studies.</li> <p></p></ul> <p></p> <p>This book is aimed at researchers and professionals in industrial and software engineering, network security, AI and machine learning (ML), engineering managers, operational and maintenance specialists, asset managers, and digital and AI manufacturing specialists.</p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1000865053",
        },
        {
          type: "ISBN_13",
          identifier: "9781000865059",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 444,
      printedPageCount: 445,
      printType: "BOOK",
      categories: [
        "Computers / Machine Theory",
        "Computers / Software Development & Engineering / Systems Analysis & Design",
        "Technology & Engineering / Industrial Engineering",
        "Technology & Engineering / Manufacturing",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=dYm3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72h5zBOmy-9ft2gowkP18miFkc708HUUktr1Yq13GSkvSGUcIjkEULRr_eF2z6x0GTBZgmF9_Ryab7Xu_it7ey2w-KjO8bY6vfcn_7eS-85jTgvygHqhY_DMbvwPOTRHi0-0y04&source=gbs_api",
        medium: "../Images/fourty.png",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=dYm3EAAAQBAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 159.48,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 125.03,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=dYm3EAAAQBAJ&rdid=book-dYm3EAAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 159480000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 125030000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Teaching AI",
      subtitle: "Exploring New Frontiers for Learning",
      authors: ["Michelle Zimmerman"],
      publisher: "International Society for Technology in Education",
      publishedDate: "2018-12-15",
      description:
        "<p>Get the tools, resources and insights you need to explore artificial intelligence in the classroom and explore what students need to know about living in a world with AI. </p><p>For many, artificial intelligence, or AI, may seem like science fiction, or inherently overwhelming. The reality is that AI is already being applied in industry and, for many of us, in our daily lives as well. A better understanding of AI can help you make informed decisions in the classroom that will impact the future of your students.</p><p>Drawing from a broad variety of expert voices from countries including Australia, Japan, and South Africa, as well as educators from around the world and underrepresented student voices, this book explores some of the ways AI can improve education. These include educating learners about AI, teaching them about living in a world where they will be surrounded by AI and helping educators understand how they can use AI to augment human ability.</p><p>Each chapter offers activities and questions to help you deepen your understanding, try out new concepts and reflect on the information presented. Links to media artifacts from trusted sources will help make your learning experience more dynamic while also providing additional resources to use in your classroom. </p><p>This book:</p><p>• Offers a unique approach to the topic, with chapter opening scenes, case studies, and featured student voices.</p><p>• Discusses a variety of ways to teach students about AI, through design thinking, project-based learning and STEM connections.</p><p>• Includes lesson ideas, activities and tools for exploring AI with your students.</p><p>• Includes references to films and other media you can use in class to start discussions on AI or inspire design thinking and STEM projects.</p><p>In Teaching AI, you’ll learn what AI is, how it works and how to use it to better prepare students in a world with increased human-computer interaction.</p>",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1564847284",
        },
        {
          type: "ISBN_13",
          identifier: "9781564847287",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 216,
      printedPageCount: 217,
      printType: "BOOK",
      categories: [
        "Education / Computers & Technology",
        "Education / Teaching / Methods & Strategies",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=ATuAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73cNN8GaB06LZ3ovil1LsPOYUjdsLMKZlaHQj7KsiSDYNVMqJkanWxKdVh9Dq5taieDym-aabbI1ToQvYQuQTLOcJB4rmdaQgY9ev4RjfHYd18ucNVsHCBytWhYy9wEmZHLU5gA&source=gbs_api",
        medium: "../Images/fifty.png",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=ATuAEAAAQBAJ&hl=&source=gbs_api",
    },
    layerInfo: {
      layers: [
        {
          layerId: "geo",
          volumeAnnotationsVersion: "1",
        },
      ],
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 24.85,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 24.85,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=ATuAEAAAQBAJ&rdid=book-ATuAEAAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 24850000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 24850000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
  {
    volumeInfo: {
      title: "Data Analytics and AI",
      authors: ["Jay Liebowitz"],
      publisher: "CRC Press",
      publishedDate: "2020-08-06",
      description:
        '<p>Analytics and artificial intelligence (AI), what are they good for? The bandwagon keeps answering, absolutely everything! Analytics and artificial intelligence have captured the attention of everyone from top executives to the person in the street. While these disciplines have a relatively long history, within the last ten or so years they have exploded into corporate business and public consciousness. Organizations have rushed to embrace data-driven decision making. Companies everywhere are turning out products boasting that "artificial intelligence is included." We are indeed living in exciting times. The question we need to ask is, do we really know how to get business value from these exciting tools?</p> <p>Unfortunately, both the analytics and AI communities have not done a great job in collaborating and communicating with each other to build the necessary synergies. This book bridges the gap between these two critical fields. The book begins by explaining the commonalities and differences in the fields of data science, artificial intelligence, and autonomy by giving a historical perspective for each of these fields, followed by exploration of common technologies and current trends in each field. The book also readers introduces to applications of deep learning in industry with an overview of deep learning and its key architectures, as well as a survey and discussion of the main applications of deep learning. The book also presents case studies to illustrate applications of AI and analytics. These include a case study from the healthcare industry and an investigation of a digital transformation enabled by AI and analytics transforming a product-oriented company into one delivering solutions and services. The book concludes with a proposed AI-informed data analytics life cycle to be applied to unstructured data. </p>',
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1000094650",
        },
        {
          type: "ISBN_13",
          identifier: "9781000094657",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 266,
      printedPageCount: 267,
      printType: "BOOK",
      categories: [
        "Computers / Data Science / Data Analytics",
        "Computers / Artificial Intelligence / General",
        "Computers / Database Administration & Management",
      ],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/publisher/content?id=cIXxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71C1o_C3PWiRhb8rSsaW6_lWOAy71M5vgeEWSEbGkCx9EBDBgC_cVP5OJ1NyDEKGzs-npfJYcMt8bQfewJYzYyX6HMTsVcoO0aYBHIMsJgtM8177UFjXQhNnnwyUCewUjk1tHxb&source=gbs_api",
        medium: "../Images/sixty.jpeg",
      },
      language: "en",
      previewLink:
        "http://books.google.nl/books?id=cIXxDwAAQBAJ&hl=&source=gbs_api",
    },
    saleInfo: {
      country: "NL",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 57.76,
        currencyCode: "EUR",
      },
      retailPrice: {
        amount: 43.65,
        currencyCode: "EUR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=cIXxDwAAQBAJ&rdid=book-cIXxDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 57760000,
            currencyCode: "EUR",
          },
          retailPrice: {
            amountInMicros: 43650000,
            currencyCode: "EUR",
          },
        },
      ],
    },
    accessInfo: {
      country: "NL",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
      },
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
  },
];

//review book
const review_book = [
  "Prepare to be enchanted by 'Whispers of Eternity.' The author's prose dances like a gentle breeze through the pages, carrying you into a world where time is but a distant echo.",
  "In 'Chrono Nexus,' the author delivers a thrilling rollercoaster through time and space. With its mind-bending plot twists and heart-pounding action, this science fiction adventure ke_s you on the edge of your seat from start to finish. The intricate details of the futuristic world and the complex relationships between the characters add depth to the narrative.",
  "'The Midnight Carnival' is a hauntingly beautiful tale that transports readers to a realm where magic and mystery collide. The author's lyrical writing style paints a vivid picture of the carnival's enchanting performances and the secrets that lie beneath.",
];

let login = false;
// responsive humburger
let burger = document.querySelector("#menu-icon");
let line_1 = document.querySelector(".line_1");
let line_2 = document.querySelector(".line_2");
let line_3 = document.querySelector(".line_3");

burger.addEventListener("click", function () {
  line_2.classList.toggle("show_2");
  line_1.classList.toggle("show_1");
  line_3.classList.toggle("show_3");
});

// add book to popular and recently
let bd_ele = document.getElementsByTagName("body")[0];
let book1 = document.getElementsByClassName("recently")[0];
let book2 = document.getElementsByClassName("recently_one")[0];

// book.volumeInfo.imageLinks.medium
// book.volumeInfo.authors
// book.volumeInfo.title
function createBookFigure(book) {
  return `
    <figure class="movies imghvr-push-down">
      <img src="${book.volumeInfo.imageLinks.medium}">
      <figcaption class="book_info">
        <p class='hover-author'><b>Author</b> : <span>"${book.volumeInfo.authors.slice(
          0,
          1
        )}"</span></p>
        <p class='hover-author'><b>Title</b>: <span>"${book.volumeInfo.title.slice(
          0,
          50
        )}"</span></p>
        <button class="btn_hov click1">View More</button>
      </figcaption>
    </figure>
  `;
}

for (let i = 0; i < 8; i++) {
  book1.innerHTML += createBookFigure(book[i]);
}

for (let v = 8; v < book.length; v++) {
  book2.innerHTML += createBookFigure(book[v]);
}

//show more info when click detail
let cover_detail = document.getElementsByClassName("cover_detail")[0];
let cover_detail_1 = document.getElementsByClassName("cover_detail_1")[0];

let show_about_book = document.getElementsByClassName("show_about_book")[0];
let show_about_book_1 = document.getElementsByClassName("show_about_book_1")[0];
let click1 = document.getElementsByClassName("click1");
let close = document.getElementsByClassName("close")[0];

for (let t = 0; t < click1.length; t++) {
  click1[t].addEventListener("click", () => {
    if (login) {
      bodyScroll("hidden");
      showClose("block");
      show_about_book.innerHTML = showBookDetail(book[t]);
    } else {
      shwoLogin("block", "addtop_login", true);
      create.classList.add("addOp");
      bodyScroll("hidden");
    }
  });
}

const showBookDetail = (para) => {
  let ava =
    para.accessInfo.epub.pdf == true ? "is Available" : "is not Available";
  return `
  <i class="fa-solid fa-xmark" id="close" onclick="closeDetail()"></i>
    <div class="detain_inner">
    <i class="fa-solid fa-heart heart" onclick="heart1()"></i>
    <img src="${para.volumeInfo.imageLinks.medium}" alt="">
   <div class="rate"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>
   <div class="info">
    <p><b class="bl">Author</b> : <span class="inf">"${
      para.volumeInfo.authors
    }"</span></p>
    <p><b class="bl">Title</b> : <span class="inf">"${
      para.volumeInfo.title
    }"</span></p>
  <p><b class="bl">Language</b> : <span class="inf">${
    para.volumeInfo.language
  }</span><p>
  <p><b class="bl">Publisher date</b> : <span class="inf">"${
    para.volumeInfo.publishedDate
  }"</span></p>
  <p><b class="bl">Preview link</b> : <span class="inf"><a href="${
    para.volumeInfo.previewLink
  }" target="_blank">Click</a></span></p>
  <p><b class="bl">PDF</b> : <span class="inf">${ava}</span></p>
  <p><b class="bl">Page Count</b> : <span class="inf">${
    para.volumeInfo.pageCount
  }</span></p>
  <p><b class="bl">Description</b> : <span class="des">${
    para.volumeInfo.description ? para.volumeInfo.description : "no description"
  }</span></p>
  </div>
  </div>
  ${review()}
  <div class="write_reviews">
      <textarea id="reviews_value" cols="35" rows="5" placeholder="Write reviews"></textarea><i class="fa-regular fa-paper-plane send"></i>
  </div>
  `;
};
let regiBtn = document.getElementsByClassName("regi_btn")[0];
let acc = document.getElementsByClassName("acc")[0];
let sendCode = document.getElementsByClassName("code-send")[0];

regiBtn.addEventListener("click", () => {
  if (ep_input.value !== "" && f_input.value !== "" && s_input.value !== "") {
    login = true;
    setTimeout(() => {
      sendCode.classList.add("addCode");
    }, 1000);
    setTimeout(() => {
      sendCode.classList.remove("addCode");
    }, 4000);
    create.style.display = "none";
    acc.classList.add("disp");
    whiteDiv.style.display = "none";
    regiParent.style.display = "none";
    bodyScroll("auto");
  }
});
let likecount1 = 0,
  likecount2 = 0,
  likecount3 = 0,
  dislikecount1 = 0,
  dislikecount2 = 0,
  dislikecount3 = 0;

// like dislike
function likeBtn() {
  likecount1 = likecount1 === 1 ? 0 : 1;
  likeChnage("like", 0);
  document.getElementsByClassName("like-count1")[0].textContent = likecount1;
}

function likeBtn2() {
  likecount2 = likecount2 === 1 ? 0 : 1;
  document.getElementsByClassName("like-count2")[0].textContent = likecount2;
  likeChnage("like", 1);
}
function likeBtn3() {
  likecount3 = likecount3 === 1 ? 0 : 1;
  document.getElementsByClassName("like-count3")[0].textContent = likecount3;
  likeChnage("like", 2);
}

function dislikeBtn1() {
  dislikecount1 = dislikecount1 === 1 ? 0 : 1;
  document.getElementsByClassName("dislike-count1")[0].textContent =
    dislikecount1;
  likeChnage("dislike", 0);
}
function dislikeBtn2() {
  dislikecount2 = dislikecount2 === 1 ? 0 : 1;
  document.getElementsByClassName("dislike-count2")[0].textContent =
    dislikecount2;
  likeChnage("dislike", 1);
}
function dislikeBtn3() {
  dislikecount3 = dislikecount3 === 1 ? 0 : 1;
  document.getElementsByClassName("dislike-count3")[0].textContent =
    dislikecount3;
  likeChnage("dislike", 2);
}

function likeChnage(x, y) {
  document.getElementsByClassName(x)[y].classList.toggle("changeColor");
}

let heart = document.getElementsByClassName("heart");
function heart1() {
  for (let p = 0; p < heart.length; p++) {
    heart[p].classList.toggle("vote");
  }
}
function review() {
  return `
  <div class="reviews">
  <div class="review_man">
  <i class="fa-regular fa-user user"></i><span class="jo">John Doe</span>
  </div>
  <p>${review_book[0]}</p>
  <i class="fa-regular fa-thumbs-up like" onclick="likeBtn()"></i><span class="like-count1">${likecount1}</span><i class="fa-regular fa-thumbs-down dislike" onclick="dislikeBtn1()"></i><span class="dislike-count1">${dislikecount1}</span>
  </div>
  </br>
  <div class="reviews">
  <div class="review_man">
  <i class="fa-regular fa-user user"></i><span class="jo">Thomos Scan</span>
  </div>
  <p>${review_book[1]}</p>
  <i class="fa-regular fa-thumbs-up like" onclick="likeBtn2()"></i><span class="like-count2">${likecount2}</span><i class="fa-regular fa-thumbs-down dislike" onclick="dislikeBtn2()"></i><span class="dislike-count2">${dislikecount2}</span>
  </div>
  </br>
  <div class="reviews">
  <div class="review_man">
  <i class="fa-regular fa-user user"></i><span class="jo">Mix Zam</span>
  </div>
  <p>${review_book[2]}</p>
  <i class="fa-regular fa-thumbs-up like" onclick="likeBtn3()"></i><span class="like-count3">${likecount3}</span><i class="fa-regular fa-thumbs-down dislike" onclick="dislikeBtn3()"></i><span class="dislike-count3">${dislikecount3}</span>
  </div>
  `;
}

// close detail
let closeDetail = () => {
  showClose("none");
  bodyScroll("auto");
};
let closeDetail2 = () => {
  show_about_book_1.style.display = "none";
  cover_detail_1.style.display = "none";
  bodyScroll("auto");
};
function showClose(par) {
  cover_detail.style.display = par;
  show_about_book.style.display = par;
}
// search bar click
const search_bar = document.getElementsByClassName("search")[0];
const parent_oak = document.getElementsByClassName("parent-oak")[0];
let api_book_container =
  document.getElementsByClassName("api_book_container")[0];
let api_book = document.getElementsByClassName("api_book")[0];

search_bar.addEventListener("click", () => {
  closeSignup();
  displayFun("block");
  bodyScroll("hidden");
});

parent_oak.addEventListener("click", () => {
  bodyScroll("auto");
  displayFun("none");
  nofound.style.display = "none";
  noname.style.display = "none";
});

let displayFun = (dis) => {
  parent_oak.style.display = dis;
  search_sec.style.display = dis;
  api_book.style.display = dis;
};

const bodyScroll = (scr) => {
  bd_ele.style.overflow = scr;
};

//loading
const loader = document.getElementsByClassName("loader")[0];

function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}

const closeSignup = () => {
  create_res.style.display = "block";
  shwoLogin("none", "addtop_login", false);
  create.classList.remove("addOp");
  create_res.classList.remove("addOp");
  bodyScroll("auto");
};

const resOnclick = () => {
  closeAboutFun("none", "auto");
  regiParent.classList.add("addtop_login");
  create_res.classList.add("addOp");
  whiteDiv.style.display = "block";
  bodyScroll("hidden");
};
// call api book
let search_key = document.getElementsByClassName("search_key")[0];
let search_input = document.getElementById("book_name");
let search_sec = document.getElementsByClassName("search_sec")[0];
let query;
search_input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    makeSearch();
    nofound.style.display = "none";
  }
});

search_key.addEventListener("click", () => {
  makeSearch();
  nofound.style.display = "none";
});

let leftarr = document.getElementsByClassName("leftarr")[0];

leftarr.addEventListener("click", () => {
  displayFun("none");
  bodyScroll("auto");
  nofound.style.display = "none";
  noname.style.display = "none";
});

let nofound = document.getElementsByClassName("nofound")[0];
let noname = document.getElementsByClassName("noname")[0];
async function makeSearch() {
  document.getElementsByClassName("error-contain")[0].style.display = "none";
  if (search_input.value === query) {
    return;
  }
  query = search_input.value;

  if (query == "") {
    noname.style.display = "block";
  } else {
    try {
      api_book_container.innerHTML=''
      noname.style.display = "none";
      displayLoading();
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAiP-nLNDOP8TwKmmZimb4j2c0gYdztP2M&maxResults=40`
      );
      const data = await response.json();
      hideLoading();
      if (data.totalItems == 0) {
        hideLoading();
        nofound.style.display = "block";
      } else {
        for (let j = 0; j < data.items.length; j++) {
          const volumeInfo = data.items[j].volumeInfo;
          const thumbnailUrl =
            volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail
              ? volumeInfo.imageLinks.thumbnail
              : "https://rb.gy/q7id9";
          api_book_container.innerHTML += `
        <figure class="movies_1 imghvr-push-down">
          <img src="${thumbnailUrl}" alt="no image return!">
          <figcaption>
            <p class='hover-author'><b>Author</b>: <span>"${
              volumeInfo.authors ? volumeInfo.authors : "Unknown"
            }"</span></p>
            <p class='hover-author'><b>Title</b>:<span>"${
              volumeInfo.title ? volumeInfo.title.slice(0, 50) : "Unknown"
            }"</span></p>
            <button class="btn_hov click2">View More</button>
          </figcaption>
        </figure>`;
        }
      }
      let click2 = document.getElementsByClassName("click2");
      for (let t = 0; t < click2.length; t++) {
        click2[t].addEventListener("click", () => {
          if (login) {
            const volumeInfo = data.items[t].volumeInfo;
            const thumbnailUrl =
              volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail
                ? volumeInfo.imageLinks.thumbnail
                : "https://rb.gy/q7id9";
            cover_detail_1.style.display = "block";
            show_about_book_1.style.display = "block";
            let ava_1 =
              data.items[t].accessInfo.epub.pdf == "true"
                ? "is Available"
                : "is not Available";
            show_about_book_1.innerHTML = `
      <i class="fa-solid fa-xmark" id="close" onclick="closeDetail2()"></i>
    <div class="detain_inner">
    <i class="fa-solid fa-heart heart heart1" onclick="heart2()"></i>
    <img src="${thumbnailUrl}" alt="">
   <div class="rate"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>
   <div class="info">
    <p><b class="bl">Author</b> : <span class="inf">"${
      data.items[t].volumeInfo.authors[0]
    }"</span></p>
    <p><b class="bl">Title</b> : <span class="inf">"${
      data.items[t].volumeInfo.title
    }"</span></p>
  <p><b class="bl">Language</b> : <span class="inf">${
    data.items[t].volumeInfo.language
  }</span><p>
  <p><b class="bl">Publisher date</b> : <span class="inf">"${
    data.items[t].volumeInfo.publishedDate
  }"</span></p>
  <p><b class="bl">Preview link</b> : <span class="inf"><a href="${
    data.items[t].volumeInfo.previewLink
  }" target="_blank">Click</a></span></p>
  <p><b class="bl">PDF</b> : <span class="inf">${ava_1}</span></p>
  <p><b class="bl">Page Count</b> : <span class="inf">${
    data.items[t].volumeInfo.pageCount
  }</span></p>
  <p><b class="bl">Description</b> : <span class="des">${
    data.items[t].volumeInfo.description
      ? data.items[t].saleInfo.description
      : "no description"
  }</span></p>

  </div>
  </div>
  ${review()}
  <div class="write_reviews">
      <textarea id="reviews_value" cols="35" rows="5" placeholder="Write reviews"></textarea><i class="fa-regular fa-paper-plane send"></i>
  </div>
  `;
          } else {
            displayFun("none");
            shwoLogin("block", "addtop_login", true);
            create.classList.add("addOp");
            bodyScroll("hidden");
          }
        });
      }
    } catch (error) {
      displayLoading();
      document.getElementsByClassName("error-contain")[0].style.display =
        "block";
    }
  }
}
cover_detail_1.addEventListener("click", () => {
  cover_detail_1.style.display = "none";
});

// clear text
document.getElementsByClassName("del")[0].addEventListener("click", () => {
  search_input.value = "";
  api_book_container.innerHTML = "";
});
//create account
const create = document.getElementsByClassName("create")[0];
const create_res = document.getElementById("create-res");
const whiteDiv = document.getElementsByClassName("whiteDiv")[0];
const regiParent = document.getElementsByClassName("regiParent")[0];

create.addEventListener("click", () => {
  shwoLogin("block", "addtop_login", true);
  create.classList.add("addOp");
  bodyScroll("hidden");
});

whiteDiv.addEventListener("click", () => {
  closeSignup();
});

function shwoLogin(born, cls, som) {
  whiteDiv.style.display = born;
  if (!som) {
    regiParent.classList.remove(cls);
  } else {
    regiParent.classList.add(cls);
  }
}
//responsive menu
const res_menu = document.getElementsByClassName("res_menu")[0];
const menu_icon = document.getElementById("menu-icon");

menu_icon.addEventListener("click", () => {
  res_menu.classList.toggle("addClass");
});

// show password
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const ep_input = document.getElementsByClassName("ep_input")[0];
const f_input = document.getElementsByClassName("f_input")[0];
const s_input = document.getElementsByClassName("s_input")[0];

eye1.addEventListener("click", () => {
  showHide(eye1, f_input);
});

eye2.addEventListener("click", () => {
  showHide(eye2, s_input);
});

function showHide(per1, per2) {
  per1.classList.toggle("fa-eye");
  let type = per2.getAttribute("type") === "password" ? "text" : "password";
  per2.setAttribute("type", type);
}

//more info
const aboutArra = [
  {
    n: "Thae Lin Oo",
    ph: "09673914671",
    email: "thaelinoo2@gmail.com",
    fb_link: "https://www.facebook.com/JanJan524844",
    htm: 70,
    css: 60,
    js: 70,
    fb_name: "Thae Lin Oo",
  },
  {
    n: "Swam Yee Htut",
    ph: "09670856719",
    email: "swanyeehtut32@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100069090613250",
    htm: 90,
    css: 90,
    js: 70,
    fb_name: "Swam Yee Htut",
  },
  {
    n: "Thura Hein",
    ph: "09693076531",
    email: "thura135880@gmail.com",
    fb_link: "https://www.facebook.com/thura.hein.7549",
    htm: 90,
    css: 90,
    js: 70,
    fb_name: "Thura Hein",
  },
  {
    n: "San Lin Aung",
    ph: "09663543612",
    email: "shawnkelvin30@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100070818584075",
    htm: 90,
    css: 90,
    js: 70,
    fb_name: "San Lin Aung",
  },
  {
    n: "Min Thant",
    ph: "09967483736",
    email: "minthant04tech@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100077415166436",
    htm: 90,
    css: 90,
    js: 70,
    fb_name: "Min Thant",
  },
];

function progressBarAndCountNumber(i) {
  let count = 0;
  const progress = document.querySelectorAll(".progress");
  const targetProgress = [aboutArra[i].htm, aboutArra[i].css, aboutArra[i].js];
  let run = setInterval(() => {
    progress.forEach((element, index) => {
      if (count <= targetProgress[index]) {
        element.parentElement.style.background = `conic-gradient(#22d1ee ${count}%, #3d5af1 0)`;
        element.firstElementChild.textContent = `${count}%`;
      }
      if (count == targetProgress[index]) {
        clearInterval(run);
      }
    });
    count++;
  }, 20);
}

const moreInfo = document.getElementsByClassName("moreInfo")[0];
const more_btn = document.getElementsByClassName("more_btn");
for (let i = 0; i < more_btn.length; i++) {
  more_btn[i].addEventListener("click", () => {
    moreInfo.innerHTML = `
      <div class="infoDiv">
      <i class="fa-solid fa-xmark clifn" title="Close" onclick="closeFun()"></i>
      <p class="nam">Name : <b>${aboutArra[i].n}</b></p>
      <p class="ph">Phone : <b>${aboutArra[i].ph}</b></p>
      <p class="mail">Email : <b>${aboutArra[i].email}</b></p>
      <p class="fb">Message : <a href="${aboutArra[i].fb_link}" target="_blank"><b>${aboutArra[i].fb_name}(Facebook)</b></a></p>
      <h3 class="skillTitle">Skils</h3>
      <section>
      <div class="parent-skill">
          <div class="skill">
              <div class="progress" data-progress="${aboutArra[i].htm}">
                  <span class="progress-number">0%</span>
              </div>
          </div>
          <span class="title">HTML</span>
      </div>

      <div class="parent-skill">
          <div class="skill">
              <div class="progress" data-progress="${aboutArra[i].css}">
                  <span class="progress-number">0%</span>
              </div>
          </div>
          <span class="title">Css</span>
      </div>

      <div class="parent-skill">
          <div class="skill">
              <div class="progress" data-progress="${aboutArra[i].js}">
                  <span class="progress-number">0%</span>
              </div>
          </div>
          <span class="title">Javascript</span>
      </div>

  </section>
      </div>
      `;
    moreInfo.classList.add("letadd");
    progressBarAndCountNumber(i);
  });
}
// close
const closeFun = () => {
  moreInfo.classList.remove("letadd");
};

let about = document.getElementsByClassName("about")[0];

const closeAboutFun = (dis, scro) => {
  about.style.display = dis;
  res_menu.classList.remove("addClass");
  line_2.classList.remove("show_2");
  line_1.classList.remove("show_1");
  line_3.classList.remove("show_3");
  closeSignup();
  bodyScroll(scro);
};

document.getElementsByClassName("closeBo")[0].addEventListener("click", () => {
  closeAboutFun("none", "auto");
});

//viewmore
let viewmore = document.getElementsByClassName("view_more")[0];
viewmore.addEventListener("click", () => {
  document.getElementsByClassName("song")[0].style.display = "block";
  viewmore.style.display = "none";
});

const link = document.querySelectorAll(".link");

link.forEach((l) => {
  l.addEventListener("click", () => {
    link.forEach((l) => {
      l.classList.remove("active");
    });
    l.classList.add("active");
  });
});

// dark-light
const sun = document.getElementsByClassName("fa-sun")[0];
const sun1 = document.getElementsByClassName("fa-sun")[1];

const modeSwitcher = () => {
  sun.classList.toggle("fa-moon");
  sun1.classList.toggle("fa-moon");

  if (sun.classList.contains("fa-moon")) {
    document.documentElement.style.setProperty("--bg-color", "#364f6b");
    document.documentElement.style.setProperty("--menu-text-color", "white");
    document.documentElement.style.setProperty("--nav-bg-color", "#071e3d");
    document.documentElement.style.setProperty(
      "--shodow-color",
      "rgb(28, 28, 28)"
    );
  } else {
    document.documentElement.style.setProperty("--bg-color", "#e5e7e9");
    document.documentElement.style.setProperty("--menu-text-color", "#364f6b");
    document.documentElement.style.setProperty("--nav-bg-color", "#dee1ec");
    document.documentElement.style.setProperty("--shodow-color", "#727171");
  }
};

window.onload = () => {
  document.getElementsByClassName("loader-parent")[0].classList.remove("dis");
};
