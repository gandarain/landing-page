const email = "email@email.com"
const phone = "+99 1234-5678-9"
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
const address = "1234 Lorem Ipsum dummy text, 12345"
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