// import React from 'react'

// import { SortableElement, SortableHandle } from 'react-sortable-hoc'
// import Resizable from 're-resizable'
// // material components
// import Grid from "@material-ui/core/Grid"
// import Paper from '@material-ui/core/Paper'

// import BasicLineChart from '../BasicLineChart'
// import PieChart from '../PieChart'
// import BasicColumnChart from '../BasicColumnChart';
// import HeatMap from '../HeatMap';
// import SpiderWeb from '../SpiderWeb';
// import StackedPercentage from '../StackedPercentage';

// const Handle = SortableHandle(() => (
//     <span
//         style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//         }}
//     >
//     </span>
// ))


// const SortableItem = SortableElement(({value, handleResize, handleOnResize}) => (
//     <Grid item>
//         <Resizable
//             size={{
//                 width: value.width,
//                 height: value.height,
//             }}
//             // onResizeStop={(e, direction, ref, d) => handleResize(d, value.id) }
//             onResize={(e, direction, ref, d) => handleOnResize(ref, value.id) }
            
//             enable={{
//                 top: false,
//                 left: false,
//                 topLeft: false,
//                 bottomLeft: false,
//                 topRight: false,
//                 right: true,
//                 bottom: true,
//                 bottomRight: true
//             }}
//             minHeight={200}
//             minWidth={200}
//             maxWidth={window.innerWidth - 100}
//         >
//             <Paper style={{width: "100%", height: "100%"}}>
//                 <BasicLineChart animation={false} width={value.width}  height={value.height} />
//                 {/* {value.item} */}
//                 <Handle />
//             </Paper>
//         </Resizable>
//     </Grid>
// ));

// export default SortableItem