import React, { Component } from 'react'
import { connect } from "react-redux"
import { changeCount, removeChart } from '../../actions/widgetActions'
import { sortableElement, sortableContainer } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import CountWidget from '../../component/CountWidget';

const SortableItem = sortableElement(({ value, sortIndex, handleRemoveCount }) => {
    return (
        <div key={value.id} className={`ox-dashboard-count-widget ox-dashboard-count-widget-edit ${value.className}`}>
            <CountWidget count={value} handleRemoveCount={handleRemoveCount} edit />
        </div>
    )
})

const SortableList = sortableContainer(({ items, handleRemoveCount }) => {
    return (
        <div className="sortable-list-div">
            {items.map((value, index) => (
                <SortableItem
                    key={value.id}
                    index={index}
                    sortIndex={index}
                    value={value}
                    handleRemoveCount={handleRemoveCount}
                />
            ))

            }
        </div>
    )
})


class EditableCount extends Component {


    state = {
        counts: this.props.counts
    }


    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ counts }) => ({
            counts: arrayMove(counts, oldIndex, newIndex)
        }))
    }

    handleRemoveCount = (id) => {
        this.props.removeChart(id, 'count')
    }

    render() {
        const { layout, counts } = this.state
        const { classes } = this.props
        return (

            <div className='ox-dashboard-count-edit-div'>
                <SortableList
                    items={counts}
                    axis="x"
                    onSortEnd={this.onSortEnd}
                    handleRemoveCount={this.handleRemoveCount}
                />
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.counts !== this.props.counts) {
            this.setState({
                ...this.state,
                counts: nextProps.counts
            })
        }
        if (nextProps.saveClicked !== this.props.saveClicked) {
            if (nextProps.saveClicked) {
                this.props.changeCount(this.state.counts)
            }
        }
    }
}

const mapStateToProps = ({ widgets }) => ({
    counts: widgets.counts
})


export default connect(mapStateToProps, { changeCount, removeChart })(EditableCount)


{/* <GridLayout
    cols={12}
    rowHeight={100}
    width={1300}
    layout={layout}
    isResizable={false}
    onDragStop={(layout, oldItem, newItem, placeholder, e, element) => this.onDragStop(layout, oldItem, newItem, placeholder, e, element)}
    compactType="horizontal"
    onLayoutChange={(a, b) => this.onLayoutChange(a,b)}
>
    {counts.map((count, index) => (
            <div key={count.id} className='count-row ox-dashboard-count-widget col' style={{backgroundColor: count.bColor}}>
                <CountWidget />
            </div>
    ))}
</GridLayout> */}