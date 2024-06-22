import AllProducts from './components/AllProducts';
import Announcements from './components/Announcements';
import Fotter from './components/Fotter';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

import image1 from './assets/trempone.jpg'
import image2 from './assets/tremptwo.jpg'
import image3 from './assets/trempthree.jpg'

function App() {
  const productList = [
    {
      name: 'Joggers',
      items: [
        {
          name: 'Casual Joggers',
          description: 'Comfortable and stylish joggers for everyday wear.',
          image: image1,
          price: 380.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Casual Joggers',
          description: 'Comfortable and stylish joggers for everyday wear.',
          image: image1,
          price: 380.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        }
      ]
    },
    {
      name: 'Tight Jeans',
      items: [
        {
          name: 'Skinny Fit Jeans',
          description: 'Trendy skinny fit jeans with a snug fit.',
          image: image1,
          price: 580.80
        },
        {
          name: 'High Waist Jeans',
          description: 'High waist jeans with a flattering fit.',
          image: image2,
          price: 680.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        },
        {
          name: 'Skinny Fit Jeans',
          description: 'Trendy skinny fit jeans with a snug fit.',
          image: image1,
          price: 580.80
        },
        {
          name: 'High Waist Jeans',
          description: 'High waist jeans with a flattering fit.',
          image: image2,
          price: 680.80
        },
        {
          name: 'Sport Joggers',
          description: 'Perfect joggers for sports and fitness activities.',
          image: image2,
          price: 480.80
        }
      ]
    }
  ];
  
  return (

    <div className="App" style={{ background: "", width: "100%" }}>
      <Announcements />
      <NavBar/>
      <Hero />
      <AllProducts productList={productList} />
      <Fotter />

    </div>
  );
}

export default App;