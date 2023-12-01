import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const data = [
    {
        "year": "2019",
        "Spain": 900,
        "SpainColor": "hsl(245, 70%, 50%)",
        "France": 1400,
        "FranceColor": "hsl(1, 70%, 50%)",
        "Germany": 1700,
        "GermanyColor": "hsl(324, 70%, 50%)",
    },
    {
        "year": "2020",
        "Spain": 1000,
        "SpainColor": "hsl(245, 70%, 50%)",
        "France": 1500,
        "FranceColor": "hsl(1, 70%, 50%)",
        "Germany": 1800,
        "GermanyColor": "hsl(324, 70%, 50%)",
    },
    {
        "year": "2021",
        "Spain": 1100,
        "SpainColor": "hsl(245, 70%, 50%)",
        "France": 1600,
        "FranceColor": "hsl(1, 70%, 50%)",
        "Germany": 1900,
        "GermanyColor": "hsl(324, 70%, 50%)",
    },
    {
        "year": "2022",
        "Spain": 1200,
        "SpainColor": "hsl(245, 70%, 50%)",
        "France": 1700,
        "FranceColor": "hsl(1, 70%, 50%)",
        "Germany": 2000,
        "GermanyColor": "hsl(324, 70%, 50%)",
    },
    {
        "year": "2023",
        "Spain": 1260,
        "SpainColor": "hsl(245, 70%, 50%)",
        "France": 1709,
        "FranceColor": "hsl(1, 70%, 50%)",
        "Germany": 2080,
        "GermanyColor": "hsl(324, 70%, 50%)",
    }
]

const MyResponsiveBar = () => {
    const theme = useTheme();
    return(
        <div className='w-full h-[400px]'>
            <ResponsiveBar
                data={data}
                keys={[
                    'Spain',
                    'France',
                    'Germany',
                ]}
                indexBy="year"
                margin={{ top: 40, right: 130, bottom: 40, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: ''
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Year',
                    legendPosition: 'middle',
                    legendOffset: 35,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'salary/month',
                    legendPosition: 'middle',
                    legendOffset: -55,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                theme={{
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    axis: {
                        domain: {
                        line: {
                            stroke: theme.palette.divider,
                            strokeWidth: 1,
                        },
                        },
                        legend: {
                        text: {
                            fontSize: 12,
                            fill: theme.palette.text.primary,
                        },
                        },
                        ticks: {
                        line: {
                            stroke: theme.palette.divider,
                            strokeWidth: 1,
                        },
                        text: {
                            fontSize: 11,
                            fill: theme.palette.text.primary,
                        },
                        },
                    },
                    grid: {
                        line: {
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                        },
                    },
                    legends: {
                        title: {
                        text: {
                            fontSize: 11,
                            fill: theme.palette.text.primary,
                        },
                        },
                        text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                        },
                        ticks: {
                        line: {},
                        text: {
                            fontSize: 10,
                            fill: theme.palette.text.primary,
                        },
                        },
                    },
                    annotations: {
                        text: {
                        fontSize: 13,
                        fill: theme.palette.text.primary,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1,
                        },
                        link: {
                        stroke: "#000000",
                        strokeWidth: 1,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1,
                        },
                        outline: {
                        stroke: "#000000",
                        strokeWidth: 2,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1,
                        },
                        symbol: {
                        fill: "#000000",
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1,
                        },
                    },
                    tooltip: {
                        container: {
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        fontSize: 12,
                        },
                        basic: {},
                        chip: {},
                        table: {},
                        tableCell: {},
                        tableCellValue: {},
                    },
                }}
            />
        </div>
    )
}
export default MyResponsiveBar;