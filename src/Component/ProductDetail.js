import PageNavigate from "./PageNavigate"
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleProduct } from "../features/Product/ProductSlice";
import { fetchSingleProduct } from "../features/Product/ProductAPI";

function ProductDetail() {
  const dispatch = useDispatch()
  const params = useParams()
  const singleproduct = useSelector(selectSingleProduct)
  console.log(singleproduct)
  // const [mainimage, setMainimage] = useState(singleproduct.images[0])

  useEffect(() => {
    dispatch(fetchSingleProduct(params.id))
  }, [dispatch, params.id])

  // return (
  //   <>
  //     <div className="max-container">
  //       <PageNavigate title={singleproduct.title} />
  //     </div>
  //     {singleproduct && <section className="padding-y">
  //       <div className="max-container">
  //         {/* // isSingleLoading ? (
  //           //   <div className="grid place-items-center h-[50vh]">
  //           //     <ColorRing
  //                 visible={true}
  //                 height="80"
  //                 width="80"
  //                 ariaLabel="blocks-loading"
  //                 wrapperClass="blocks-wrapper"
  //                 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  //               />
  //             </div>
  //           ) : */}
  //         <div className="grid grid-cols-2 gap-10 items-center max-md:grid-cols-1">
  //           <div className="">
  //             <figure>
  //               <img src={mainimage.url} alt="product image" className="cursor-pointer rounded-md" />
  //             </figure>
  //             <div className="grid grid-cols-4 gap-2 mt-2">
  //               {singleproduct.images &&
  //                 singleproduct.images.map((current, index) => (
  //                   <figure key={index}>
  //                     <img src={current} alt="similar-products" onClick={() => setMainimage(current)} className=" lg:h-[100px] cursor-pointer" />
  //                   </figure>
  //                 ))
  //               }
  //             </div>
  //           </div>
  //           <div className="flex flex-col gap-3">
  //             <div className="flex flex-col gap-2">
  //               <h2 className="font-semibold text-lg tracking-wide">{singleproduct.title}</h2>
  //               <div className="flex items-center gap-2">
  //                 {/* <Star stars={stars} reviews={reviews} /> */}
  //               </div>
  //               <p>MRP:
  //                 <del className="font-semibold">
  //                   {singleproduct.discountPercentage}%
  //                 </del>
  //               </p>
  //               <p className="text-blue-400">
  //                 Deal of the Day: {singleproduct.price}
  //               </p>
  //               <p className="font-base tracking-wide font-roboto">{singleproduct.description}</p>
  //             </div>
  //             <div className="flex items-center justify-between flex-wrap my-2">
  //               <div className="flex items-center justify-center flex-col gap-1">
  //                 <TbTruckDelivery className="text-blue-400 text-2xl" />
  //                 <h3 className="font-medium text-base font-roboto tracking-wide">Free Delivery</h3>
  //               </div>
  //               <div className="flex items-center justify-center flex-col gap-1">
  //                 <TbReplaceFilled className="text-blue-400 text-2xl" />
  //                 <h3 className="font-medium text-base font-roboto tracking-wide">7 Days Replacement</h3>
  //               </div>
  //               <div className="flex items-center justify-center flex-col gap-1">
  //                 <FaProductHunt className="text-blue-400 text-2xl" />
  //                 <h3 className="font-medium text-base font-roboto tracking-wide">Best Product</h3>
  //               </div>
  //               <div className="flex items-center justify-center flex-col gap-1">
  //                 <MdOutlineSecurity className="text-blue-400 text-2xl" />
  //                 <h3 className="font-medium text-base font-roboto tracking-wide">2 Year Warranty</h3>
  //               </div>
  //             </div>
  //             <div className="flex flex-col items-start gap-1">

  //               <h3>Availabel <span className="font-semibold"> {singleproduct.stock > 0 ? "In Stock" : "Out of Stock"}</span></h3>
  //               {/* <h3>ID: <span className="font-semibold"> {id}</span></h3> */}
  //               <h3>Brand: <span className="font-semibold">{singleproduct.brand}</span></h3>
  //             </div>
  //             <hr className="border border-slate-300" />
  //             {/* <AddToCard stock={stock} product={singleProduct} /> */}
  //             <button>Add To Cart</button>
  //           </div>
  //         </div>
  //       </div>

  //     </section>
  //     }
  //   </>
  // )

    return (
      <div>ProductDetail</div>
    )
}
export default ProductDetail