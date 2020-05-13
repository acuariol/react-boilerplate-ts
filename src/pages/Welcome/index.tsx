import React, {Component} from 'react'

import {connect} from 'umi'

class Welcome extends Component {

  componentDidMount() {


  }


  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta turpis, ut iaculis justo.</p>
      </div>
    );
  }
}


export default connect()(Welcome)
