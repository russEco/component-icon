import React from 'react';
var IconLookup;

export default class Icon extends React.Component {

  propTypes: {
    type: React.PropTypes.string.isRequired;
  }

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    size: "0 0 1024 1024",
    background: "#000000",
    color: "#FFFFFF",
    shape: 'circle',
    id: ''
  }

  render() {

    this.svgStyles = {
        background: this.props.background,
        borderRadius: (this.props.shape == 'circle' && this.props.type!=='logoWorldIF') ? '50%' : null
    }

    IconLookup = {
      facebook: `<path fill=${this.props.color}  d="M621.658,510.189h-71.75c0,114.624,0,255.811,0,255.811H443.594c0,0,0-139.747,0-255.811H393.03 v-90.374h50.563v-58.499c0-41.875,19.875-107.315,107.28-107.315l78.752,0.314v87.75c0,0-47.875,0-57.158,0 c-9.312,0-22.56,4.624-22.56,24.624v53.126h81.062L621.658,510.189z"></path>`,
      twitter: `<path fill=${this.props.color}  d="M715.593,407.626c0.218,4.499,0.314,9.002,0.314,13.565c0,138.81-105.658,298.874-298.877,298.874
  c-59.344,0-114.531-17.376-161.03-47.187c8.249,0.938,16.595,1.437,25.062,1.437c49.251,0,94.499-16.749,130.438-44.938
  c-45.939-0.874-84.752-31.251-98.092-72.938c6.403,1.187,12.966,1.875,19.747,1.875c9.594,0,18.877-1.312,27.658-3.686
  c-48-9.69-84.25-52.125-84.25-103.002c0-0.435,0-0.874,0-1.312c14.186,7.875,30.374,12.563,47.594,13.126
  c-28.188-18.813-46.72-51.002-46.72-87.44c0-19.248,5.188-37.312,14.221-52.81c67.144,84.153,151.324,134.996,216.499,109.747
  c-1.782-7.686-2.72-15.686-2.72-23.936c0-58,47.034-105.002,105.062-105.002c30.189,0,57.501,12.752,76.656,33.126
  c23.907-4.688,46.406-13.437,66.72-25.501c-7.875,24.563-24.499,45.126-46.189,58.125c21.251-2.499,41.501-8.186,60.314-16.499
  C753.939,374.314,736.124,392.813,715.593,407.626z"></path>`,
      googleplus: `<path fill=${this.props.color}  d="M541.5 549c-14-10.5-44.4-32-44.4-46.4 0-16.9 4.8-25.2 30.3-45.2 26.1-20.4 44.6-47.3 44.6-80.6 0-36.4-14.8-69.3-42.8-85.3h39.6l33.7-35.4H451.6c-76.6 0-140.4 56.5-140.4 118.6 0 63.4 41.9 114.1 114 114.1 5 0 9.9-.3 14.6-.6-4.7 8.9-8 18.9-8 29.4 0 17.6 9.7 27.7 21.7 39.3-9.1 0-17.8.2-27.4.2-87.7 0-149.1 60.4-149.1 118.3 0 57.1 74 92.7 161.7 92.7 99.9 0 161.4-56.7 161.4-113.7 0-45.8-9.9-68.8-58.6-105.4zm-91.1-83.4c-40.7-1.2-79.3-38.6-86.3-92-7.1-53.4 20.2-94.2 60.9-93.1 40.7 1.3 75.5 45.1 82.5 98.4 6.9 53.5-16.4 87.9-57.1 86.7zm-15.9 277.2c-60.6 0-104.4-38.4-104.4-84.4 0-45.2 51.3-84.1 112-83.4 14.1.1 27.3 2.4 39.2 6.3 32.9 22.9 59.4 37.2 66.1 63.2 1.3 5.3 1.9 10.7 1.9 16.2.1 46.1-29.6 82.1-114.8 82.1z"/><path id="svg_4" fill=${this.props.color}  d="M788.6 367.4H719V437h-34.8v-69.6h-69.6v-34.8h69.6V263H719v69.6h69.6z"/>`,
      linkedin: `<rect x="279.435" y="428.563" fill=${this.props.color}  width="109.782" height="330.125"/>
<path fill=${this.props.color}  d="M334.312,383.44h-0.72c-36.813,0-60.624-25.376-60.624-57.062c0-32.378,24.563-57.062,62.061-57.062
  c37.565,0,60.688,24.685,61.376,57.062C396.405,358.064,372.594,383.44,334.312,383.44z"/>
<path fill=${this.props.color}  d="M784.968,758.688h-109.75V582.064c0-44.374-15.876-74.688-55.626-74.688
  c-30.282,0-48.374,20.499-56.31,40.189c-2.909,7.062-3.626,16.813-3.626,26.749v184.374H449.938c0,0,1.404-299.187,0-330.125
  h109.718v46.752c14.624-22.563,40.688-54.502,98.938-54.502c72.186,0,126.374,47.126,126.374,148.563V758.688z"/>`,
      whatsapp: `<path fill=${this.props.color}  d="M812.197,490.405c0,165.455-135.187,299.617-301.95,299.617
    c-52.959,0-102.715-13.524-145.969-37.282l-167.19,53.13l54.497-160.748c-27.501-45.159-43.314-98.118-43.314-154.717
    c0-165.49,135.187-299.643,301.975-299.643C677.01,190.761,812.197,324.915,812.197,490.405L812.197,490.405z M510.248,238.484
    c-140.022,0-253.886,112.992-253.886,251.921c0,55.095,17.949,106.157,48.354,147.703l-31.704,93.539l97.546-30.995
    c40.076,26.296,88.097,41.648,139.689,41.648c139.963,0,253.86-113.001,253.86-251.895
    C764.108,351.475,650.211,238.484,510.248,238.484L510.248,238.484z M662.726,559.416c-1.871-3.067-6.809-4.904-14.182-8.578
    c-7.407-3.665-43.818-21.452-50.593-23.887c-6.775-2.443-11.747-3.673-16.651,3.665c-4.938,7.347-19.128,23.895-23.46,28.799
    c-4.306,4.912-8.612,5.51-16.018,1.837c-7.416-3.665-31.277-11.448-59.537-36.436c-21.99-19.496-36.847-43.519-41.187-50.866
    c-4.297-7.339-0.427-11.311,3.238-14.976c3.34-3.306,7.415-8.577,11.114-12.849c3.708-4.306,4.938-7.381,7.407-12.285
    c2.469-4.904,1.239-9.175-0.632-12.849c-1.837-3.665-16.651-39.811-22.827-54.531c-6.134-14.677-12.311-12.242-16.651-12.242
    c-4.306,0-9.244-0.607-14.182-0.607c-4.938,0-12.951,1.837-19.726,9.184c-6.775,7.339-25.895,25.125-25.895,61.237
    c0,36.138,26.501,71.079,30.2,75.949c3.708,4.912,51.191,81.493,126.447,110.899c75.257,29.397,75.257,19.589,88.832,18.351
    c13.549-1.196,43.784-17.753,49.96-34.907C664.563,577.169,664.563,562.458,662.726,559.416L662.726,559.416z M662.726,559.416"/>`,
      mail: `<path fill=${this.props.color}  d="M316.433,293.158 c-32.159,0-58.229,26.03-58.229,58.229c0.722,88.297,0.002,181.747,0,271.735c0,30.989,24.106,56.071,54.59,57.926l433.077,0.303 c31.049-1.254,55.803-26.833,55.803-58.229V341.379c-4.712-27.452-28.544-48.221-57.319-48.221 C601.791,293.223,459.051,293.159,316.433,293.158z M315.523,323.789h430.651l-208.35,208.35c-3.802,3.802-9.846,3.802-13.647,0 L315.523,323.789z M772.559,338.649v282.349c0,16.822-6.061,26.325-18.196,29.721L607.578,503.631L772.559,338.649z M290.655,339.863l162.252,162.252L304.605,650.417c-10.153-3.426-13.687-11.6-13.951-22.746V339.863z M473.53,522.434 l50.647,50.95c3.802,3.802,9.846,3.802,13.647,0l49.131-49.131l127.982,127.982H343.728L473.53,522.434z"></path>`,
      rss: `<path fill=${this.props.color}  d="M327.47,767.44c-37.533,0-67.939-30.438-67.939-68c0-37.565,30.406-67.939,67.939-67.939
  c37.562,0,68,30.374,68,67.939C395.47,737.002,365.031,767.44,327.47,767.44z"/>
<path fill=${this.props.color}  d="M498.033,767.875c0-64.125-24.845-124.374-69.907-169.622
  c-44.97-45.251-104.845-70.128-168.531-70.128V430c185.562,0,336.563,151.565,336.563,337.875H498.033z"/>
<path fill=${this.props.color}  d="M671.345,768c0-228.186-184.627-413.875-411.594-413.875V256c281.062,0,509.718,229.69,509.718,512
  H671.345z"/>`,
      down: `<path fill=${this.props.color}  d="M514.5 723.2L156.8 377.4l64.1-77.6L514.5 568l291.8-268.2 64.1 77.6-355.9 345.8z"></path>`,
      up: `<path fill=${this.props.color}  d="M512.7 299.8l357.7 345.8-64.1 77.6L512.7 455 220.9 723.2l-64.1-77.6 355.9-345.8z"></path>`,
      right: `<path fill=${this.props.color}   d="M725.3 510.6L379.5 868.3l-77.6-64.1 268.2-293.6-268.2-291.8 77.6-64.1 345.8 355.9z"></path>`,
      left: `<path fill=${this.props.color} d="M301.9 512.4l345.8-357.7 77.6 64.1-268.2 293.6 268.2 291.8-77.6 64.1-345.8-355.9z"></path>`,
      logoWorldIF: `<path fill="#33BDEB" d="M0 0h1024v1024H0z"/><path fill="#FFFFFF" d="M227.4 239.5h66.9v555.1h-66.9V239.5zM309 794.6V239.5h66.9v555.1H309zM446.2 239.5h377.1V295H513.2v499.6h-66.9V239.5zm350.2 293.1H527.9V309.7h295.5v54.7H594.8v112.7h201.6v55.5zm-268.5 262V547.3h268.6V602H594.8v192.6h-66.9z"/>`,
      home: `<path fill=${this.props.color}  d="M870.5 564.4H790v304.3H572.5V680.5H451.6v188.2H234.2V564.4h-80.5l136.9-152.2V212h100.7v80.1l120.8-140.2 181.2 204.2c0 .1 177.2 208.3 177.2 208.3z"></path>`,
      hamburger: `<rect x="257" y="351" fill=${this.props.color}  style="fill-rule:evenodd;clip-rule:evenodd;" width="507" height="56"/><rect x="257" y="484" fill=${this.props.color}  style="fill-rule:evenodd;clip-rule:evenodd;" width="507" height="56"/><rect x="257" y="620" fill=${this.props.color}  style="fill-rule:evenodd;clip-rule:evenodd;" width="507" height="56"/>`,
      user: `<path fill=${this.props.color}  d="M573.723,610.199c-12.215-1.943-12.49-35.533-12.49-35.533s35.888-35.531,43.711-83.311 c21.047,0,34.044-50.794,12.998-68.669C618.821,403.873,644.992,275,512.5,275c-132.493,0-106.322,128.873-105.448,147.686 c-21.04,17.875-8.049,68.669,12.997,68.669c7.823,47.779,43.717,83.311,43.717,83.311s-0.28,33.589-12.495,35.533 C411.924,616.462,265,681.263,265,752.327h495C760,681.263,613.075,616.462,573.723,610.199L573.723,610.199z M573.723,610.199"></path>`,
      magnifier: `<path fill=${this.props.color}  d="M742.734,687.092L628.861,590.24c-11.77-10.59-24.358-15.455-34.527-14.987 c26.879-31.488,43.114-72.332,43.114-116.977c0-99.565-80.712-180.278-180.272-180.278c-99.565,0-180.278,80.713-180.278,180.278 c0,99.56,80.713,180.272,180.278,180.272c44.645,0,85.489-16.234,116.977-43.118c-0.468,10.173,4.397,22.762,14.987,34.532 l96.851,113.868c16.583,18.427,43.669,19.981,60.196,3.458C762.71,730.76,761.156,703.673,742.734,687.092L742.734,687.092z M457.176,578.458c-66.377,0-120.187-53.81-120.187-120.182c0-66.377,53.81-120.187,120.187-120.187 c66.371,0,120.182,53.81,120.182,120.187C577.357,524.647,523.551,578.458,457.176,578.458L457.176,578.458z M457.176,578.458"></path>`
    };

    return (
      <svg className={this.props.className} style={this.svgStyles} id={this.props.id} viewBox={this.props.size} dangerouslySetInnerHTML={{__html: IconLookup[this.props.type]}} />
    );
  }
}