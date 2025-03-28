import { createContext } from "react";


export const initialstate = {
    projects : [
        {
            projname: 'Global IP Locator',
            projdescr: 'Developed a responsive web application that utilizes the ipify REST API for getting the ipaddress location and Leaflet for visualizing the location on a map.',
            projtech: 'HTML, CSS, JavaScript, ipify, Leaflet, GitHub, REST API',
            projurl: 'https://ip-address-tracker-mocha-nu.vercel.app/',
            projvid: '/videos/ip-address.webm',
            projsrc: '/images/ipaddressSS.png'
        },
        {
            projname: 'Countries Information Hub',
            projdescr: 'A responsive website that displays information about the countries of the world utilizing a REST API for the country information.',
            projtech: 'HTML, CSS, JavaScript, Material UI, REACT, Redux, GitHub, Rest API',
            projurl: 'https://rest-countries-api-flax-six.vercel.app/',
            projvid: '/videos/rest-countries.webm',
            projsrc: '/images/countriesSS.png'
        },
        {
            projname: 'URL Shortening API',
            projdescr: "A responsive website where a user can be able to shorten long url's, copy to clipboard by a click of a button and have the saved links saved in localstorage if the user refreshes the page.",
            projtech: 'HTML, CSS, JavaScript, Vercel, TinyURL REST API',
            projurl: 'https://url-shortening-api-one-eta.vercel.app/',
            projvid: '/videos/shortly.webm',
            projsrc: ''
        }
    ],
    socialLinks:[
        {
            linkname: 'githubicon',
            linkhref: 'https://github.com/DMK980',
        },
        {
            linkname: 'linkedinicon',
            linkhref: 'https://www.linkedin.com/in/derrick-kaaria/',
        },
        {
            linkname: 'mailicon',
            linkhref: 'https://github.com/DMK980',
        }
    ],
    heading:{
        names: ['Derrick','Batman'],
        roles: ['Software Engineer','Software Developer','Frontend Developer','Backend Developer','Data Science Graduate'],
        locations: ['Kenya','England','Austria','Mars ']
    }
}
export const store = createContext(initialstate);

