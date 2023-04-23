const email = "putraindahkarya.konsultan@gmail.com"
const phone = "0812-6220-0965"
const links = [
  {
    id : 1,
    title : "Feature",
    child : [
      {
        title : "LOREM IPSUM",
        link : "/"
      },
      {
        title : "LOREM IPSUM",
        link : "/"
      },
      {
        title : "LOREM IPSUM",
        link : "/"
      },
      {
        title : "LOREM IPSUM",
        link : "/"
      }
    ]
  },
  { 
    id : 2,
    title : "About Us",
    child : [
      {
        title : "Contact Us",
        link : "/"
      },
      {
        title : "FAQs",
        link : "/"
      },
      { 
        title : "Privacy Policy",
        link : "/"
      },
    ]
  },
];
const address = "Jalan Karet 12 nomor 12 Simalingkar, Kel. Mangga, Kec. Medan Tuntungan"
const copyright = "2020 © Gan[Z]. All right reserved"
const social_media = [
  {
    id: 1,
    link: '#',
    icon: 'facebook-square'
  },
  {
    id: 2,
    link: '#',
    icon: 'instagram-alt'
  },
  {
    id: 1,
    link: '#',
    icon: 'linkedin-square'
  }
]
const footer_content = {
  email,
  phone,
  links,
  address,
  copyright,
  social_media
}

export default footer_content