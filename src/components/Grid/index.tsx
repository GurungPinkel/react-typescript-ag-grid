import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ICellRendererComp,
  ICellRendererFunc,
  GridReadyEvent,
  ValueGetterParams,
} from "ag-grid-community";
import ExampleCellComponent from "../ExampleCellComponent";

import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-material.css";

interface iColumns {
  headerName: string;
  field: string;
  editable: boolean;
  checkboxSelection?: boolean;
  enableCellChangeFlash?: boolean;
  cellRenderer?:
    | {
        new (): ICellRendererComp;
      }
    | ICellRendererFunc
    | string;
  valueGetter?: any;
}

interface iData {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  company: string;
}

const frameworkComponents = {
  exampleCellComponent: ExampleCellComponent,
};

export const SampleGrid = () => {
  const columnDef: iColumns[] = [
    {
      headerName: "ID",
      field: "id",
      editable: false,
      cellRenderer: "exampleCellComponent",
      valueGetter: (params: ValueGetterParams) => {
        return parseInt(params.data.id) * 100;
      },
    },
    {
      headerName: "First Name",
      field: "firstName",
      editable: true,
    },
    { headerName: "Last Name", field: "lastName", editable: false },
    { headerName: "Address", field: "address", editable: false },
    { headerName: "City", field: "city", editable: false },
    { headerName: "Country", field: "country", editable: false },
    { headerName: "Phone", field: "phone", editable: false },
    { headerName: "Email", field: "email", editable: false },
    { headerName: "Company", field: "company", editable: false },
  ];
  const rowData: iData[] = [
    {
      id: "38087",
      firstName: "Alyson",
      lastName: "Cassin",
      address: "277 Heaney Square",
      city: "Port Misaeltown",
      country: "Martinique",
      phone: "506-040-8594",
      email: "Cortney28@gmail.com",
      company: "Heidenreich Inc",
    },
    {
      id: "31346",
      firstName: "Victor",
      lastName: "Abbott",
      address: "752 Hoppe Ways",
      city: "South Lucius",
      country: "Niger",
      phone: "552-045-2215",
      email: "Brady9@hotmail.com",
      company: "Kemmer - Swift",
    },
    {
      id: "27562",
      firstName: "Elsie",
      lastName: "Corwin",
      address: "4846 Marjorie Tunnel",
      city: "Lake Guadalupe",
      country: "United Kingdom",
      phone: "645-223-3687",
      email: "Alison.Rosenbaum@yahoo.com",
      company: "Ruecker, Leannon and Orn",
    },
    {
      id: "31970",
      firstName: "Kitty",
      lastName: "Bosco",
      address: "38854 Gottlieb Stream",
      city: "Hamillshire",
      country: "South Georgia and the South Sandwich Islands",
      phone: "124-064-6655",
      email: "Malika11@gmail.com",
      company: "Emard - Wiza",
    },
    {
      id: "29465",
      firstName: "Dean",
      lastName: "Littel",
      address: "42259 Stoltenberg Ville",
      city: "Dayneland",
      country: "Timor-Leste",
      phone: "059-852-4690",
      email: "Bethany79@hotmail.com",
      company: "Zemlak Inc",
    },
    {
      id: "36841",
      firstName: "Lina",
      lastName: "Christiansen",
      address: "93194 Dicki Streets",
      city: "O'Keefeborough",
      country: "Brazil",
      phone: "016-233-2423",
      email: "Humberto7@hotmail.com",
      company: "Koch Group",
    },
    {
      id: "99661",
      firstName: "Corrine",
      lastName: "Koelpin",
      address: "885 Heidenreich Grove",
      city: "Brownfort",
      country: "Cote d'Ivoire",
      phone: "180-451-0902",
      email: "Dolores98@yahoo.com",
      company: "Sanford and Sons",
    },
    {
      id: "28864",
      firstName: "Marlee",
      lastName: "Thiel",
      address: "343 Jaida Mission",
      city: "Kochbury",
      country: "Andorra",
      phone: "996-363-6473",
      email: "Floy97@gmail.com",
      company: "Bartell LLC",
    },
    {
      id: "59403",
      firstName: "Raymond",
      lastName: "Schulist",
      address: "575 Dibbert Shore",
      city: "North Wyatt",
      country: "Syrian Arab Republic",
      phone: "552-923-0200",
      email: "Gabe95@yahoo.com",
      company: "Ebert - Wilkinson",
    },
    {
      id: "71816",
      firstName: "Jessyca",
      lastName: "Wuckert",
      address: "66210 Raphael Islands",
      city: "Lake Martine",
      country: "Papua New Guinea",
      phone: "397-817-3915",
      email: "Adah40@yahoo.com",
      company: "Bogan, Ritchie and Gutmann",
    },
    {
      id: "31378",
      firstName: "Audrey",
      lastName: "Reinger",
      address: "7064 Jacynthe Shore",
      city: "East Duanehaven",
      country: "United Kingdom",
      phone: "349-976-1953",
      email: "Coralie51@hotmail.com",
      company: "Lebsack LLC",
    },
    {
      id: "9362",
      firstName: "Ashton",
      lastName: "Torp",
      address: "60761 Kaylin Summit",
      city: "East Carloville",
      country: "Cocos (Keeling) Islands",
      phone: "422-598-6380",
      email: "Irving_Stanton@gmail.com",
      company: "Effertz - Dare",
    },
    {
      id: "52062",
      firstName: "Godfrey",
      lastName: "Nolan",
      address: "3918 Arturo Mill",
      city: "Candelarioside",
      country: "Singapore",
      phone: "478-634-2629",
      email: "Dortha.Hyatt39@gmail.com",
      company: "Thiel, Borer and Davis",
    },
    {
      id: "31823",
      firstName: "Brannon",
      lastName: "Beier",
      address: "2604 Mack Summit",
      city: "Lake Sandrabury",
      country: "Martinique",
      phone: "595-355-1976",
      email: "Fabiola_OKon43@hotmail.com",
      company: "Glover - Feeney",
    },
    {
      id: "34322",
      firstName: "Nora",
      lastName: "Turcotte",
      address: "222 Wilderman Stravenue",
      city: "South Kurtis",
      country: "Saint Martin",
      phone: "443-676-8869",
      email: "Terry.Tromp54@gmail.com",
      company: "Walsh - Kuhn",
    },
    {
      id: "1553",
      firstName: "Candice",
      lastName: "Vandervort",
      address: "2271 Hirthe Summit",
      city: "Nathenland",
      country: "Japan",
      phone: "181-479-1470",
      email: "Franco.Gleichner3@hotmail.com",
      company: "Wilderman - Mayert",
    },
    {
      id: "28871",
      firstName: "Sterling",
      lastName: "Beatty",
      address: "255 Jast Islands",
      city: "New Kayafort",
      country: "Tanzania",
      phone: "539-590-7254",
      email: "Noah_Dickens@gmail.com",
      company: "Hilll - Hirthe",
    },
    {
      id: "50470",
      firstName: "Gerhard",
      lastName: "Luettgen",
      address: "7052 Eino Path",
      city: "Port Kaneport",
      country: "Rwanda",
      phone: "650-136-9911",
      email: "Jameson_Ankunding3@gmail.com",
      company: "Hegmann Group",
    },
    {
      id: "94536",
      firstName: "Hazle",
      lastName: "Erdman",
      address: "118 Tyrese Mountain",
      city: "New Nicolaville",
      country: "Saint Barthelemy",
      phone: "693-765-6131",
      email: "Kailee82@gmail.com",
      company: "Trantow Group",
    },
    {
      id: "46621",
      firstName: "Jaylen",
      lastName: "Daniel",
      address: "8126 Runolfsdottir Manor",
      city: "Lehnerstad",
      country: "Bhutan",
      phone: "783-348-4980",
      email: "Keaton_Bode@hotmail.com",
      company: "Kris Inc",
    },
    {
      id: "65719",
      firstName: "Gerry",
      lastName: "Connelly",
      address: "2442 Kianna Shoals",
      city: "South Vanmouth",
      country: "Vietnam",
      phone: "713-781-1062",
      email: "Monty68@yahoo.com",
      company: "Roberts and Sons",
    },
    {
      id: "45218",
      firstName: "Hailey",
      lastName: "Mante",
      address: "9352 Bernhard Mountain",
      city: "Lake Lolitaland",
      country: "Senegal",
      phone: "462-296-0596",
      email: "Alena.Schaden10@hotmail.com",
      company: "Fritsch - Flatley",
    },
    {
      id: "26583",
      firstName: "Thaddeus",
      lastName: "Adams",
      address: "15233 Bergstrom Isle",
      city: "Vanmouth",
      country: "Tanzania",
      phone: "483-923-9867",
      email: "Rita_Williamson41@yahoo.com",
      company: "Murazik Group",
    },
    {
      id: "19289",
      firstName: "Lurline",
      lastName: "Bergstrom",
      address: "077 Sophie Land",
      city: "Lake Nikkichester",
      country: "South Africa",
      phone: "388-405-5043",
      email: "Osvaldo.Breitenberg32@gmail.com",
      company: "Boehm Inc",
    },
    {
      id: "45623",
      firstName: "Horace",
      lastName: "McLaughlin",
      address: "9845 Carrie Ville",
      city: "South Vivian",
      country: "Denmark",
      phone: "576-801-3324",
      email: "Darian.Sporer10@yahoo.com",
      company: "Kub LLC",
    },
    {
      id: "66581",
      firstName: "Veronica",
      lastName: "Spinka",
      address: "2281 Gilbert Inlet",
      city: "New Williamton",
      country: "Cocos (Keeling) Islands",
      phone: "734-548-1250",
      email: "Berenice8@yahoo.com",
      company: "Cartwright Inc",
    },
    {
      id: "41905",
      firstName: "Krystal",
      lastName: "Thompson",
      address: "453 Bailee Lights",
      city: "New Cortezfort",
      country: "Zimbabwe",
      phone: "795-299-6532",
      email: "Solon_Senger@yahoo.com",
      company: "Bauch - Koss",
    },
    {
      id: "45929",
      firstName: "Amy",
      lastName: "Schaefer",
      address: "796 Jast Place",
      city: "New Neha",
      country: "Hungary",
      phone: "521-639-0303",
      email: "Efren_Ortiz@hotmail.com",
      company: "Senger LLC",
    },
    {
      id: "90281",
      firstName: "Derick",
      lastName: "Hammes",
      address: "412 Hartmann Lodge",
      city: "Gusikowskiville",
      country: "Guinea-Bissau",
      phone: "101-572-1338",
      email: "Waldo.Stanton77@gmail.com",
      company: "Rohan - Stark",
    },
    {
      id: "60527",
      firstName: "Raven",
      lastName: "Carter",
      address: "944 Dietrich Parks",
      city: "West Kasandraview",
      country: "Italy",
      phone: "766-446-9243",
      email: "Donato.Kertzmann80@yahoo.com",
      company: "Ortiz LLC",
    },
    {
      id: "86391",
      firstName: "Sibyl",
      lastName: "Hahn",
      address: "62659 Schumm Manor",
      city: "Welchshire",
      country: "Trinidad and Tobago",
      phone: "636-388-4202",
      email: "Halle_Connelly@yahoo.com",
      company: "Cassin - Smith",
    },
    {
      id: "79426",
      firstName: "Cathrine",
      lastName: "Dicki",
      address: "08762 Arno Station",
      city: "Koepptown",
      country: "Niger",
      phone: "022-675-0878",
      email: "Kylee_Waters@hotmail.com",
      company: "Lehner, Dickinson and Robel",
    },
    {
      id: "80016",
      firstName: "Solon",
      lastName: "Purdy",
      address: "615 Bode Creek",
      city: "Abelardoland",
      country: "Germany",
      phone: "732-151-7514",
      email: "Cecilia_Schowalter33@hotmail.com",
      company: "Satterfield, McGlynn and Friesen",
    },
    {
      id: "69637",
      firstName: "Dustin",
      lastName: "Bashirian",
      address: "06301 Eliseo Pines",
      city: "Abigaleburgh",
      country: "Andorra",
      phone: "613-697-7917",
      email: "Loraine_Zieme@gmail.com",
      company: "Simonis, Effertz and Kunde",
    },
    {
      id: "14726",
      firstName: "Leola",
      lastName: "Mayert",
      address: "1465 Ayana View",
      city: "North Crystelburgh",
      country: "Pakistan",
      phone: "835-028-2055",
      email: "Henriette69@yahoo.com",
      company: "Terry and Sons",
    },
    {
      id: "68812",
      firstName: "Brady",
      lastName: "Lebsack",
      address: "239 Hodkiewicz Keys",
      city: "West Samir",
      country: "Chile",
      phone: "143-526-4990",
      email: "Maurine.Huels@hotmail.com",
      company: "Wisoky, Schroeder and Gerlach",
    },
    {
      id: "60756",
      firstName: "Eula",
      lastName: "Hettinger",
      address: "36886 Werner Center",
      city: "New Miracle",
      country: "Venezuela",
      phone: "640-022-5739",
      email: "Delphia_Beer82@hotmail.com",
      company: "Padberg, Wuckert and Jerde",
    },
    {
      id: "40806",
      firstName: "Lafayette",
      lastName: "Stokes",
      address: "40468 Anissa Spring",
      city: "Vickyberg",
      country: "Guatemala",
      phone: "023-489-9953",
      email: "Alvis.Dach24@hotmail.com",
      company: "Armstrong Group",
    },
    {
      id: "61894",
      firstName: "Camilla",
      lastName: "Blick",
      address: "4458 Gus Station",
      city: "Raleighburgh",
      country: "Malaysia",
      phone: "293-192-1170",
      email: "Burnice6@hotmail.com",
      company: "McKenzie - Beahan",
    },
    {
      id: "74529",
      firstName: "Magnus",
      lastName: "Howell",
      address: "546 Edyth Harbor",
      city: "South Cody",
      country: "Democratic People's Republic of Korea",
      phone: "520-237-2327",
      email: "Brady.Jacobi34@hotmail.com",
      company: "Mraz - Jenkins",
    },
    {
      id: "85540",
      firstName: "Wilfred",
      lastName: "Hand",
      address: "490 Ortiz Land",
      city: "South Reganland",
      country: "Qatar",
      phone: "516-559-4175",
      email: "Arlo26@hotmail.com",
      company: "Kulas - Kshlerin",
    },
    {
      id: "23098",
      firstName: "Marta",
      lastName: "Bauch",
      address: "7376 Jessie Island",
      city: "Lake Coraliebury",
      country: "Reunion",
      phone: "002-560-4824",
      email: "Chanelle.Monahan@yahoo.com",
      company: "Rosenbaum, Roberts and Koepp",
    },
    {
      id: "4331",
      firstName: "Mackenzie",
      lastName: "Gerlach",
      address: "870 Stokes Trail",
      city: "Kevonborough",
      country: "Zambia",
      phone: "261-309-6772",
      email: "Adelle_Beatty86@yahoo.com",
      company: "Senger and Sons",
    },
    {
      id: "23346",
      firstName: "Hunter",
      lastName: "McGlynn",
      address: "399 Kemmer Curve",
      city: "New Diannaside",
      country: "American Samoa",
      phone: "747-158-6097",
      email: "Cara.Mueller@hotmail.com",
      company: "Moen - Trantow",
    },
    {
      id: "51436",
      firstName: "Rosario",
      lastName: "Huel",
      address: "21353 Wuckert Walks",
      city: "New Beth",
      country: "Ukraine",
      phone: "152-200-1806",
      email: "Euna.Leffler90@yahoo.com",
      company: "Wisozk, Kilback and Parker",
    },
    {
      id: "3156",
      firstName: "Bruce",
      lastName: "Fay",
      address: "6947 Dare Track",
      city: "Kesslershire",
      country: "New Zealand",
      phone: "932-253-9097",
      email: "Kaitlin_Altenwerth52@yahoo.com",
      company: "Lang, Pouros and Hackett",
    },
    {
      id: "17626",
      firstName: "Alfreda",
      lastName: "Schoen",
      address: "51923 Heaney Ports",
      city: "Katelinchester",
      country: "Saint Kitts and Nevis",
      phone: "285-092-9266",
      email: "Eliane.Treutel@yahoo.com",
      company: "Senger, Littel and Swaniawski",
    },
    {
      id: "43678",
      firstName: "Dillan",
      lastName: "Morar",
      address: "861 Quitzon Lake",
      city: "Johnsonshire",
      country: "Djibouti",
      phone: "285-377-1282",
      email: "Gaylord.Corkery@yahoo.com",
      company: "Schaefer - Hilpert",
    },
    {
      id: "7197",
      firstName: "Alia",
      lastName: "Padberg",
      address: "46104 Eliseo Manor",
      city: "Martinamouth",
      country: "Lao People's Democratic Republic",
      phone: "449-096-9424",
      email: "Casey60@yahoo.com",
      company: "Roob Inc",
    },
    {
      id: "71527",
      firstName: "Janie",
      lastName: "Howell",
      address: "675 Champlin Prairie",
      city: "East Milanmouth",
      country: "Bahamas",
      phone: "123-950-9537",
      email: "Kristopher_Ullrich@hotmail.com",
      company: "O'Kon, Connelly and Reinger",
    },
    {
      id: "13986",
      firstName: "Raheem",
      lastName: "Hessel",
      address: "5470 Weimann Bridge",
      city: "West Albinaside",
      country: "Poland",
      phone: "391-983-4889",
      email: "Andy29@hotmail.com",
      company: "Kutch, Predovic and Abshire",
    },
    {
      id: "79472",
      firstName: "Filiberto",
      lastName: "Rutherford",
      address: "69448 Ruby Club",
      city: "South Naomitown",
      country: "Philippines",
      phone: "074-029-4737",
      email: "Kaitlin_Brakus57@hotmail.com",
      company: "Wiegand and Sons",
    },
    {
      id: "99192",
      firstName: "Cathy",
      lastName: "Pfeffer",
      address: "70164 Hilpert Flats",
      city: "South Janiyafort",
      country: "Albania",
      phone: "254-886-8997",
      email: "Annabel81@hotmail.com",
      company: "Hartmann - Jacobs",
    },
    {
      id: "36643",
      firstName: "Brook",
      lastName: "Leuschke",
      address: "610 Fadel Wall",
      city: "East Lessieshire",
      country: "Malta",
      phone: "311-332-5269",
      email: "Sophia83@yahoo.com",
      company: "Breitenberg LLC",
    },
    {
      id: "86645",
      firstName: "Kavon",
      lastName: "Lesch",
      address: "4708 Jade Crest",
      city: "Schmidtport",
      country: "Lithuania",
      phone: "966-117-8667",
      email: "Isac.Dooley@yahoo.com",
      company: "Mayert - Keeling",
    },
    {
      id: "26377",
      firstName: "Donald",
      lastName: "Hartmann",
      address: "180 Kuhic Valley",
      city: "Alisamouth",
      country: "Italy",
      phone: "550-912-3285",
      email: "Alicia26@hotmail.com",
      company: "Pfannerstill - Cremin",
    },
    {
      id: "69731",
      firstName: "Veda",
      lastName: "Crooks",
      address: "9269 Balistreri Gardens",
      city: "Lake Wilford",
      country: "Seychelles",
      phone: "507-839-1120",
      email: "Stacey_Pacocha@hotmail.com",
      company: "Wolf, Senger and Wolff",
    },
    {
      id: "57339",
      firstName: "Tony",
      lastName: "Stanton",
      address: "73505 Waters Club",
      city: "East Ignatiusfurt",
      country: "Cuba",
      phone: "219-047-2254",
      email: "Glenna.Johnson33@yahoo.com",
      company: "Grady, Kuphal and Rempel",
    },
    {
      id: "65244",
      firstName: "Paolo",
      lastName: "Lockman",
      address: "44156 Kulas Locks",
      city: "Raynorview",
      country: "Turks and Caicos Islands",
      phone: "578-518-5242",
      email: "Adrienne_Veum69@yahoo.com",
      company: "Fisher - Eichmann",
    },
    {
      id: "6368",
      firstName: "Ryleigh",
      lastName: "Jacobi",
      address: "2402 Kulas Prairie",
      city: "Volkmanmouth",
      country: "Uzbekistan",
      phone: "818-934-3355",
      email: "Keaton5@yahoo.com",
      company: "Wyman - Fadel",
    },
    {
      id: "6689",
      firstName: "Ransom",
      lastName: "Gaylord",
      address: "837 Ted Drive",
      city: "Lake Bryana",
      country: "Gambia",
      phone: "003-294-5970",
      email: "Leonora21@hotmail.com",
      company: "Nader - Ebert",
    },
    {
      id: "80692",
      firstName: "Marcus",
      lastName: "Jacobs",
      address: "64273 West Light",
      city: "Alaynaport",
      country: "Brazil",
      phone: "496-070-6741",
      email: "Theresia_Pacocha@yahoo.com",
      company: "Bernhard - Champlin",
    },
    {
      id: "2110",
      firstName: "Marianne",
      lastName: "Krajcik",
      address: "90001 Leland Village",
      city: "Lulushire",
      country: "Martinique",
      phone: "221-657-4310",
      email: "Winnifred_Jacobi37@hotmail.com",
      company: "Gaylord Group",
    },
    {
      id: "37913",
      firstName: "Meredith",
      lastName: "Reichert",
      address: "72812 Gerson Knoll",
      city: "Port Annamaeville",
      country: "Anguilla",
      phone: "522-176-7890",
      email: "Adolphus_Feil9@gmail.com",
      company: "Lakin Group",
    },
    {
      id: "84368",
      firstName: "Mitchell",
      lastName: "Adams",
      address: "143 Leopold Manors",
      city: "Kuphalside",
      country: "Slovakia (Slovak Republic)",
      phone: "311-451-9370",
      email: "Filomena.Jerde63@hotmail.com",
      company: "Reilly and Sons",
    },
    {
      id: "56924",
      firstName: "Catalina",
      lastName: "Senger",
      address: "3449 Legros Plaza",
      city: "Josieland",
      country: "Saint Barthelemy",
      phone: "958-508-1056",
      email: "Rod_Upton@yahoo.com",
      company: "Johnston - Rutherford",
    },
    {
      id: "1158",
      firstName: "Gino",
      lastName: "Powlowski",
      address: "9447 Estel Islands",
      city: "Lake Ciaraport",
      country: "Swaziland",
      phone: "804-578-7774",
      email: "Eleonore48@yahoo.com",
      company: "Dibbert, Reilly and Paucek",
    },
    {
      id: "24088",
      firstName: "Marcos",
      lastName: "Schaefer",
      address: "5084 Freda Cliffs",
      city: "Daughertymouth",
      country: "Croatia",
      phone: "673-782-7466",
      email: "Desmond.Ledner74@hotmail.com",
      company: "McDermott, O'Kon and Bosco",
    },
    {
      id: "24317",
      firstName: "Aliya",
      lastName: "Nikolaus",
      address: "6868 Morissette Port",
      city: "Janiyamouth",
      country: "Portugal",
      phone: "658-730-6707",
      email: "Melany_Purdy@gmail.com",
      company: "Miller Group",
    },
    {
      id: "56710",
      firstName: "Laura",
      lastName: "Cummings",
      address: "643 Walsh Island",
      city: "North Elmerport",
      country: "Singapore",
      phone: "255-451-7558",
      email: "Bartholome_Walter@yahoo.com",
      company: "White Inc",
    },
    {
      id: "36368",
      firstName: "Pamela",
      lastName: "Padberg",
      address: "83411 Rogahn Summit",
      city: "New Hillaryberg",
      country: "Martinique",
      phone: "209-449-9035",
      email: "Florine.Mueller@yahoo.com",
      company: "Murray, Thompson and Dach",
    },
    {
      id: "98842",
      firstName: "Eloisa",
      lastName: "Gutmann",
      address: "56721 Leanne Islands",
      city: "North Ludie",
      country: "Palau",
      phone: "981-654-1785",
      email: "Duane.Cremin92@gmail.com",
      company: "Adams - Wehner",
    },
    {
      id: "66346",
      firstName: "Mikayla",
      lastName: "Prosacco",
      address: "924 Violette Viaduct",
      city: "North Quincy",
      country: "Mayotte",
      phone: "483-082-2074",
      email: "Casimir31@gmail.com",
      company: "Ledner - VonRueden",
    },
    {
      id: "21509",
      firstName: "Roscoe",
      lastName: "Nicolas",
      address: "094 Anderson Mountains",
      city: "Carlohaven",
      country: "Antigua and Barbuda",
      phone: "619-682-8467",
      email: "Sarai_Mills@gmail.com",
      company: "Bernhard, O'Hara and Hamill",
    },
    {
      id: "66700",
      firstName: "Edgar",
      lastName: "Erdman",
      address: "20706 Cormier Square",
      city: "Lockmanview",
      country: "Switzerland",
      phone: "184-074-3355",
      email: "Eunice31@hotmail.com",
      company: "Schiller - Torphy",
    },
    {
      id: "92648",
      firstName: "Alva",
      lastName: "Maggio",
      address: "5199 Christina Estates",
      city: "Zechariahshire",
      country: "Turkey",
      phone: "923-551-8113",
      email: "Tommie_Upton44@gmail.com",
      company: "Corwin, Jones and Bashirian",
    },
    {
      id: "67585",
      firstName: "Freida",
      lastName: "Steuber",
      address: "0517 Wiegand Extensions",
      city: "Keeblerport",
      country: "Andorra",
      phone: "123-578-8810",
      email: "Nettie39@gmail.com",
      company: "Mraz, Tremblay and Mayert",
    },
    {
      id: "74566",
      firstName: "Christelle",
      lastName: "Crona",
      address: "597 Marvin Mountains",
      city: "Karineton",
      country: "Saint Barthelemy",
      phone: "321-277-9890",
      email: "Abner81@yahoo.com",
      company: "Greenfelder and Sons",
    },
    {
      id: "24623",
      firstName: "Jeanette",
      lastName: "Beier",
      address: "54264 Alejandra Causeway",
      city: "Garrickport",
      country: "Ecuador",
      phone: "454-237-1432",
      email: "Wyman_Koch@yahoo.com",
      company: "Hamill - Monahan",
    },
    {
      id: "31651",
      firstName: "Helga",
      lastName: "Parker",
      address: "343 Hegmann Drive",
      city: "West Katarinamouth",
      country: "Christmas Island",
      phone: "049-521-8330",
      email: "Lonny99@hotmail.com",
      company: "Jerde, Hoeger and Cummerata",
    },
    {
      id: "60324",
      firstName: "Mia",
      lastName: "Miller",
      address: "5814 Dibbert Pine",
      city: "East Kayleestad",
      country: "Tokelau",
      phone: "651-377-0742",
      email: "Amani.Crona@yahoo.com",
      company: "Bednar, Olson and Nienow",
    },
    {
      id: "7528",
      firstName: "Piper",
      lastName: "Hirthe",
      address: "579 Delphia Curve",
      city: "Granvilletown",
      country: "Bahamas",
      phone: "499-028-0820",
      email: "Ethel61@hotmail.com",
      company: "Vandervort - Schmitt",
    },
    {
      id: "45503",
      firstName: "Nakia",
      lastName: "Kuvalis",
      address: "51871 Kuhn Square",
      city: "New Peter",
      country: "Anguilla",
      phone: "171-142-5280",
      email: "Celine.Dickinson@hotmail.com",
      company: "Nikolaus, Mann and Ortiz",
    },
    {
      id: "23110",
      firstName: "Brendan",
      lastName: "Kerluke",
      address: "17464 Lauren Cove",
      city: "Eliton",
      country: "Singapore",
      phone: "598-974-6398",
      email: "Hassan.Cruickshank@gmail.com",
      company: "Brekke, Schiller and Barrows",
    },
    {
      id: "17773",
      firstName: "Ephraim",
      lastName: "Nikolaus",
      address: "5955 Heaney Overpass",
      city: "South Normaside",
      country: "Denmark",
      phone: "483-219-1315",
      email: "Piper83@yahoo.com",
      company: "Kuphal - Reichert",
    },
    {
      id: "74764",
      firstName: "Murl",
      lastName: "Balistreri",
      address: "0287 Brad Centers",
      city: "East Giovannaville",
      country: "Tajikistan",
      phone: "460-263-2942",
      email: "Annie.Mertz36@hotmail.com",
      company: "Ruecker, Johnston and Olson",
    },
    {
      id: "14144",
      firstName: "Broderick",
      lastName: "Towne",
      address: "3897 Loyal Bridge",
      city: "Port Trevaton",
      country: "Anguilla",
      phone: "746-284-6067",
      email: "Crawford_Botsford76@gmail.com",
      company: "Stoltenberg - Schmeler",
    },
    {
      id: "71033",
      firstName: "Kelton",
      lastName: "Sawayn",
      address: "61977 Schinner Ports",
      city: "Ephraimchester",
      country: "Malaysia",
      phone: "742-113-4521",
      email: "Garnett44@hotmail.com",
      company: "Pacocha - Kunze",
    },
    {
      id: "92133",
      firstName: "Neha",
      lastName: "Predovic",
      address: "7277 Daphnee Overpass",
      city: "North Freeman",
      country: "Armenia",
      phone: "641-041-8253",
      email: "Noemi.Howell@gmail.com",
      company: "Mertz Inc",
    },
    {
      id: "92274",
      firstName: "Bulah",
      lastName: "Stoltenberg",
      address: "7467 Cronin Pass",
      city: "Wizahaven",
      country: "Pakistan",
      phone: "870-689-6011",
      email: "Eugene.Pacocha62@gmail.com",
      company: "Sipes, Kulas and McDermott",
    },
    {
      id: "85784",
      firstName: "Evelyn",
      lastName: "Brown",
      address: "18795 Hintz Wells",
      city: "Lake Berneiceton",
      country: "Lithuania",
      phone: "949-235-8102",
      email: "Friedrich.Larson16@yahoo.com",
      company: "Schiller - Kilback",
    },
    {
      id: "84102",
      firstName: "Maryse",
      lastName: "Jerde",
      address: "37170 Lenore Pines",
      city: "Kaitlynshire",
      country: "Ecuador",
      phone: "212-898-9064",
      email: "Elaina.Runolfsdottir13@yahoo.com",
      company: "Quigley, Hoppe and Stracke",
    },
    {
      id: "14432",
      firstName: "Barton",
      lastName: "Schamberger",
      address: "7607 Bogisich Extensions",
      city: "Blaiseside",
      country: "Fiji",
      phone: "778-658-8751",
      email: "Leta.Kertzmann89@yahoo.com",
      company: "Zulauf and Sons",
    },
    {
      id: "8338",
      firstName: "Shaylee",
      lastName: "Strosin",
      address: "3992 Abigail Drive",
      city: "North Eveview",
      country: "Faroe Islands",
      phone: "191-097-7280",
      email: "Jordyn85@hotmail.com",
      company: "Williamson - Powlowski",
    },
    {
      id: "1667",
      firstName: "Luella",
      lastName: "Buckridge",
      address: "4525 Donnelly Freeway",
      city: "Lake Nelsside",
      country: "Uganda",
      phone: "659-161-4997",
      email: "Teagan89@gmail.com",
      company: "Bode - Corkery",
    },
    {
      id: "80273",
      firstName: "Brycen",
      lastName: "Hand",
      address: "298 Davis Spur",
      city: "Odaland",
      country: "Svalbard & Jan Mayen Islands",
      phone: "957-722-2521",
      email: "Oliver27@hotmail.com",
      company: "Moore - Grimes",
    },
    {
      id: "12973",
      firstName: "Constantin",
      lastName: "Conn",
      address: "331 Harber Mountain",
      city: "Westton",
      country: "Japan",
      phone: "840-088-9134",
      email: "Clarabelle.Jacobi@hotmail.com",
      company: "Gaylord - Jast",
    },
    {
      id: "68928",
      firstName: "Baby",
      lastName: "McClure",
      address: "75206 Kovacek Turnpike",
      city: "South Joaquinland",
      country: "Lithuania",
      phone: "698-500-1473",
      email: "Judy_Heidenreich@yahoo.com",
      company: "Weimann, Simonis and Leuschke",
    },
    {
      id: "14135",
      firstName: "Dave",
      lastName: "Nienow",
      address: "062 Kurt Mountain",
      city: "Lake Jaronchester",
      country: "Croatia",
      phone: "146-258-3310",
      email: "Colby.Paucek@gmail.com",
      company: "Senger and Sons",
    },
    {
      id: "46849",
      firstName: "Maymie",
      lastName: "Cruickshank",
      address: "145 Schamberger Manors",
      city: "West Jarrod",
      country: "Isle of Man",
      phone: "582-180-2511",
      email: "Alexanne.Durgan84@yahoo.com",
      company: "Marks LLC",
    },
  ];

  const onGridReady = (params: GridReadyEvent): void => {
    console.log("test");
    console.log(params);
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: "500px", width: "100%" }}
    >
      <AgGridReact
        columnDefs={columnDef}
        rowData={rowData}
        defaultColDef={{
          sortable: true,
        }}
        rowSelection="multiple"
        frameworkComponents={frameworkComponents}
        debug={process.env.NODE_ENV === "development"}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};