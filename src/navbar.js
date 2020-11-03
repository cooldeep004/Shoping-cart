import React from 'react';


class Navbar extends React.Component {
 render(){
     return(
         <div style={styles.nav}>
             <div style={styles.cartIconContainer}>
                 <img  style={styles.cartIcon} src="https://www.flaticon.com/svg/static/icons/svg/1170/1170627.svg" alt="cart" />
     <span style={styles.cartCount}>{this.props.count}</span>
             </div>
         </div>
     )
 }
}

const styles={
cartIcon:{
    height:32,
    marginRight:20,
    marginTop:14
},
nav:{
    height:70,
    background:'#4267b2',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'centre'
},
cartIconContainer:{
    position:'relative'
},
cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding:'4px 8px',
   position:'absolute',
   right:0,
   top:0
}

}
export default Navbar;