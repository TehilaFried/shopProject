import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    return {
        products: state.products.products,
        basket: state.products.basket,
        total: state.products.total
    }
}

export default connect(mapStateToProps)(withRouter(function FinalPayment(props){
    const {basket, total,history}=props;
    useEffect(() => {
        let flag = window.confirm(" ?האם ברצונך לעבור לתשלום")
        if (!flag) {
            history.push("/basket")
        }
    })
    return(
        <>
        <h1 className="text-center">סהכ לתשלום: {total}</h1>
        {basket.map(item=>
              <div class="card m-1" >
              <img class="card-img-top " src={item.url} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">price:{item.price}</p>
                  <p>count:  {item.count}</p>
              </div>
          </div>
          )}
        </>
    )
}))