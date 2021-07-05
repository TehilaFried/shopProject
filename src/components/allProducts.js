
import React, { useState } from 'react'
import { connect } from 'react-redux'
// import basket from '../redux/reducers/basket';
// // import css from '.../App.css'
// import products from '../redux/reducers/products';
import { addProduct,setTotal } from '../redux/actions'


function mapStateToProps(state) {
    return {
        products: state.products.products,
        basket: state.products.basket,
        total:state.products.total
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addProduct: (product) => { dispatch(addProduct(product)) },
        setTotal:(total)=>{dispatch(setTotal(total))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(function AllProducts(props) {
    const { products, addProduct,setTotal } = props;
    const[selectItem,setSelectItem]=useState({})
    const [count,setCount]=useState();
    
    function onAddProduct(e) {
        console.log("add");
        addProduct({
            name:selectItem.name,
            price:selectItem.price,
            url:selectItem.url,
            count:count ?? 0
        })  
        
    }
    
    return (
        <div>



            <div className='row'>

                {products.map((item) => (
                    
                        <div className="col-sm-3">
                            <div className="card" style={{ width: " 18rem" }} key={item.id}>
                                <img className="card-img-top" src={item.url} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                   onClick={e=>(setSelectItem(item))} >
                                        Add </button>
                                
                            </div>
                        

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{selectItem.name}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="card-img-top" src={selectItem.url} alt="Card image cap"></img>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <input type='number' defaultValue="0" onChange={e=>{setCount(e.target.value)}}></input>
                                        <button type="button" className="btn btn-primary" onClick={() => { onAddProduct(selectItem) }}>הוסף</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                ))}

            </div>







        </div >
    )
})
