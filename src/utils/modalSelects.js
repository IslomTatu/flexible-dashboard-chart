export const selects = {
    categories: [
        {
            value: 'sales',
            label: 'Sales',
            types: [
                {
                    value: "sales_by_locations",
                    label: 'Sales by locations',
                    styles: [
                        {
                            value: 'count',
                            label: "Count Widget"
                        },
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        },
                        {
                            value: "basic_column",
                            label: "Basic Column Chart"
                        },
                        {
                            value: "stacked",
                            label: "Stacked Percentege"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        },
                        {
                            value: "spiderweb",
                            label: "Spiderweb Chart"
                        },
                        {
                            value: "multiple_yaxis",
                            label: "Multiple Yaxis"
                        }

                    ]
                },
                {
                    value: "sales_by_brand",
                    label: 'Sales by Brands',
                    styles: [
                        {
                            value: 'count',
                            label: "Count Widget"
                        },
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        },
                        {
                            value: "basic_column",
                            label: "Basic Column Chart"
                        },
                        {
                            value: "stacked",
                            label: "Stacked Percentege"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        },
                        {
                            value: "spiderweb",
                            label: "Spiderweb Chart"
                        },
                        {
                            value: "multiple_yaxis",
                            label: "Multiple Yaxis"
                        }

                    ]
                },
                {
                    value: "sale_by_seller",
                    label: 'Sales by Sellers',
                    styles: [
                        {
                            value: 'count',
                            label: "Count Widget"
                        },
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        },
                        {
                            value: "basic_column",
                            label: "Basic Column Chart"
                        },
                        {
                            value: "stacked",
                            label: "Stacked Percentege"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        },
                        {
                            value: "spiderweb",
                            label: "Spiderweb Chart"
                        },
                        {
                            value: "multiple_yaxis",
                            label: "Multiple Yaxis"
                        }

                    ]
                },
                {
                    value: "sales_by_users",
                    label: 'Sales by Users',
                    styles: [
                        {
                            value: 'count',
                            label: "Count Widget"
                        },
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        },
                        {
                            value: "basic_column",
                            label: "Basic Column Chart"
                        },
                        {
                            value: "stacked",
                            label: "Stacked Percentege"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        },
                        {
                            value: "spiderweb",
                            label: "Spiderweb Chart"
                        },
                        {
                            value: "multiple_yaxis",
                            label: "Multiple Yaxis"
                        }

                    ]
                },
                {
                    value: "sales_by_shift",
                    label: 'Sales by Shifts',
                    styles: [
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        }

                    ]
                },
                {
                    value: "payment_methods_by_cashdesk",
                    label: 'Payment methods by cashdesk',
                    styles: [
                        {
                            value: 'table',
                            label: "Table Widget"
                        }

                    ]
                },
                {
                    value: "sales_by_sqm",
                    label: 'Sales by SQM',
                    styles: [
                        {
                            value: 'count',
                            label: "Count widget"
                        }

                    ]
                },
                {
                    value: "sales_sell_through_by_location",
                    label: 'Sales sell-through by location',
                    styles: [
                        {
                            value: 'count',
                            label: "Count widget"
                        }

                    ]
                },
                {
                    value: "gross_margin_by_locations",
                    label: "Gross margin by locations",
                    styles: [
                        {
                            value: 'count',
                            label: "Count widget"
                        },
                        {
                            value: 'basic_line',
                            label: "Basic Line Chart"
                        },
                        {
                            value: "stacked",
                            label: "Stacked Percentege"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        },
                    ]
                }
            ]
        },
        {
            value: 'crm',
            label: 'CRM',
            types: [
                {
                    value: "customers_qty",
                    label: "Customers qty",
                    styles: [
                        {
                            value: "count",
                            label: "Count Widget"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        }
                    ]
                },
                {
                    value: "new_customers_qty",
                    label: "New customers qty",
                    styles: [
                        {
                            value: "count",
                            label: "Count Widget"
                        },
                        {
                            value: "pie",
                            label: "Pie Chart"
                        }
                    ]
                },
                {
                    value: "new_and_returned_customers_qty",
                    label: "New and returned customers qty",
                    styles: [
                        {
                            value: "pie",
                            label: "Pie Chart"
                        }
                    ]
                },
                {
                    value: "custome_segmentation",
                    label: "Customer segmentation",
                    styles: [
                        {
                            value: "map",
                            label: "Map Chart"
                        }
                    ]
                },
            ]
        },
        {
            value: 'hrm',
            label: 'HRM',
            types: [
                {
                    value: 'top_sellers',
                    label: "Top Sellers",
                    styles: [
                        {
                            value: "table",
                            label: 'Table Widget'
                        }
                    ]
                }
            ]
        },
        {
            value: 'kpi',
            label: 'KPI',
            types: [
                {
                    value: 'visitors_by_location',
                    label: 'Visitors by locations',
                    styles: [
                        {
                            value: 'bg_line',
                            label: 'Simple Line Chart'
                        }
                    ]
                },
                {
                    value: "visitors_and_cr",
                    label: 'Visitors and CR',
                    styles: [
                        {
                            value: 'customized_line',
                            label: 'Customized Line Chart'
                        }
                    ]
                },
                {
                    value: 'upt',
                    label: 'UPT',
                    styles: [
                        {
                            value: 'count',
                            label: "Count Widget"
                        }
                    ]
                },
                {
                    value: 'upt_and_sold_qty',
                    label: 'UPT and Sold qty',
                    styles: [
                        {
                            value: 'customized_line',
                            label: 'Customized Line Chart'
                        }
                    ]
                },
                {
                    value: 'atv',
                    label: "AVT",
                    styles: [
                        {
                            value: 'count',
                            label: 'Count Widget'
                        }
                    ]
                },
                {
                    value: 'aup',
                    label: 'AUP',
                    styles: [
                        {
                            value: 'count',
                            label: 'Count Widget'
                        }
                    ]
                }
            ]
        },
        {
            value: 'finance',
            label: 'Finance',
            types: [
                {
                    value: 'financial_operation',
                    label: 'Financial Operations',
                    styles: [
                        {
                            value: 'basic_column',
                            label: 'Basic Column Chart'
                        }
                    ]
                },
                {
                    value: 'profit_funnel_by_location',
                    label: "Profit Funnel by location",
                    styles: [
                        {
                            value: 'funnel',
                            label: "Funnel Chart"
                        }
                    ]
                },
                {
                    value: 'compare_categories_of_expenses',
                    label: 'Compare categories of expenses',
                    styles: [
                        {
                            value: 'pie',
                            label: 'Pie Chart'
                        }
                    ]
                },
                {
                    value: 'compare_categories_of_incomes',
                    label: 'Compare categories of incomes',
                    styles: [
                        {
                            value: 'pie',
                            label: "Pie Chart"
                        }
                    ]
                }
            ]
        },
        {
            value: 'products',
            label: 'Products',
            types: [
                {
                    value: 'stock_by_location',
                    label: 'Stock by location',
                    styles: [
                        {
                            value: 'pie',
                            label: 'Pie Chart'
                        }
                    ]
                },
                {
                    value: 'bestsellers_by_?',
                    label: 'Bestsellers by ?',
                    styles: [
                        {
                            value: 'pie',
                            label: 'Pie Chart'
                        },
                        {
                            value: 'word',
                            label: 'Word Cloud'
                        },
                        {
                            value: 'table',
                            label: 'Table Widget'
                        }
                    ]
                },
                {
                    value: 'product_sales_qty_by_?',
                    label: 'Product sales qty by ?',
                    styles: [
                        {
                            value: 'heat',
                            label: 'Heat Map'
                        }
                    ]
                },
                {
                    value: 'product_sales_qty_by_promotions_discount',
                    label: 'Product sales qty by promitions discount',
                    styles: [
                        {
                            value: 'pie',
                            label: 'Pie Chart'
                        }
                    ]
                }
            ]
        }
    ],
    periods: [
        {
            value: 'today',
            label: 'Today'
        },
        {
            value: 'this_week',
            label: 'This week'
        },
        {
            value: 'this_month',
            label: 'This month'
        },
        {
            value: 'this_quarter',
            label: 'This quarter'
        },
        {
            value: 'this_half_year',
            label: 'This half year'
        },
        {
            value: 'this_year',
            label: 'This Year'
        },
        {
            value: 'all_time',
            label: 'All Time'
        },
        {
            value: 'custom_date',
            label: 'Custom date'
        },
    ],
    groups: [
        {
            value: 'hour',
            label: "Hour"
        },
        {
            value: 'day',
            label: "Day"
        },
        {
            value: 'week',
            label: "Week"
        },
        {
            value: 'month',
            label: "Month"
        },
        {
            value: 'quarter',
            label: "Quarter"
        },
        {
            value: 'half_year',
            label: "Half year"
        },
        {
            value: 'year',
            label: "Year"
        },
    ]
}