import React from 'react';
import PieChart from './PieChart';
import BasicColumnChart from './BasicColumnChart';
import BasicLineChart from './BasicLineChart';
import HeatMap from './HeatMap';
import SpiderWeb from './SpiderWeb';
import StackedPercentage from './StackedPercentage';
import TableWidget from './TableWidget';
import BGLineChart from './BGLineChart';
import MultiplieYaxis from './MultiplieYaxis';

const OxChart = ({ style, ...props }) => {
    if (style === 'pie') return (<div><PieChart {...props} /></div>)
    if (style === 'basic_column') return <BasicColumnChart {...props} />
    if (style === 'basic_line') return <BasicLineChart {...props} />
    if (style === 'heat_map') return <HeatMap {...props} />
    if (style === 'spiderweb') return <SpiderWeb {...props} />
    if (style === 'stacked') return <StackedPercentage {...props} />
    if (style === 'table') return <TableWidget {...props} />
    if (style === 'bg_line') return <BGLineChart {...props} />
    if (style === 'multiple_yaxis') return <MultiplieYaxis {...props} />
    return null
}

export default OxChart
