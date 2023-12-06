import React,{useState, useContext} from 'react'
import Breadcrumbs from '../sections/common/Breadcrumbs'
import Sidebar from '../sections/shop/Sidebar'
import Products from '../sections/shop/Products'
import ProductContext from '../context/ProductContext';

export default function Shop() {

  const productContextData = useContext(ProductContext);
  const filterPrice = productContextData.productsList.products.map(prod=> prod.price);

  const maxValu = Math.max(...filterPrice);
  const minValu = Math.min(...filterPrice);

  const initPosStae = {minimumvalue: minValu, maximumValue: maxValu};
  const [minMaxRangeValue, setMinMaxRangeValue] = useState(initPosStae);

  const [catFilterValue, setCatFilterValue] = useState([]);

  const rangeSliderPositionHandler = (val) =>{
    setMinMaxRangeValue(val);
  }

   const catFilterHandler = (val) =>{
    setCatFilterValue(val);
   }
  

  return (
    <>
    <Breadcrumbs />
    <section class="section section-xxl bg-default text-md-left">
        <div class="container">
          <div class="row row-50">
             <Sidebar rangeSliderPosition={rangeSliderPositionHandler} catFilter={catFilterHandler} />
             <Products rangeSliderFilter={minMaxRangeValue} categoryFilter={catFilterValue} />
          </div>
        </div>
    </section>
    </>
  )
}
