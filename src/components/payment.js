
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { addProduct, deleteProduct, setCount, setTotal, subtractCount } from '../redux/actions'

function mapStateToProps(state) {
    return {
        products: state.products.products,
        basket: state.products.basket,
        total: state.products.total
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct: (id) => { dispatch(addProduct(id)) },
    deleteProduct: (product) => { dispatch(deleteProduct(product)) },
    setCount: (count) => dispatch(setCount(count)),
    subtractCount: (id) => dispatch(subtractCount(id)),
    setTotal:(total)=>dispatch(setTotal(total))

})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(function Payment(props) {
    const { products, basket, total, deleteProduct, setCount, subtractCount,history } = props;
    const [selectProduct, setSelectProduct] = useState({})
    // function handleRemove(e){
    //     setProduct(item)
    //     deleteProduct(product);
    // }
    function del(e) {
        console.log(basket);
        console.log(selectProduct);
        deleteProduct(selectProduct)

    }
    function toPayment() {
        history.push('/finalPayment')
    }
    return (
        <>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {basket ?
                            basket.map((item) => (
                                <div key={item.id} className="card text-black text-center bg-blue mb-3 col-3" style={{ maxWidth: "16rem" }}>
                                    <div className="card-header bg-primary font-weight-bold color">{item.name}</div>
                                    <div className="card-body">
                                        <span>{'₪' + item.price} 'מחיר ליח</span><br />
                                        <label for="quantity">כמות</label>
                                        <input type="number" defaultValue={item.count} onChange={(e) => {
                                            // setSelectProduct()
                                            setCount({
                                                url: item.url,
                                                words: item.words,
                                                price: item.price,
                                                count: e.target.value
                                            })
                                            setTotal((e.target.value - item.count) * item.price)
                                        }} id="quantity" name="quantity" min="0" max="100" />  <Button variant="primary" onClick={() => subtractCount(item.id)}>-</Button><br />
                                        <button
                                            className="text-center text-black btn btn-outline bg-primary font-weight-bold"
                                            onClick={() => deleteProduct(item)} disabled={item.disable}
                                        >הסר מהסל
                                        </button>
                                    </div>

                                </div>



                            )) : (<p>Non</p>)}
                    </ul>
                </div>
            </div>
            {total? <button type="button" onClick={e => { toPayment() }} className="btn btn-outline-primary">לתשלום</button>:""}

        </>
    )
}))