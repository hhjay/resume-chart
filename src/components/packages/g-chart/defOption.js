let Max = 20,
    mock = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#e1e1e1",
                }
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#e1e1e1",
                }
            },
            axisLabel: {
                show: false
            }
        },
        series: []
    }

for(let i = 0; i < Max; i++) {
    // mock.axis.data.push(i);
    mock.series.push(parseInt(Math.random(0, 1) * Max));
}

export default {
    line: {
        color: "#e1e1e1",
        xAxis: mock.xAxis,
        yAxis: mock.yAxis,
        series: [{
            data: mock.series,
            silent: true,
            showSymbol: false,
            smooth: true,
            type: 'line',
        }],
    },
    tree: {
        series: [
            {
                type: 'tree',
                data: [
                    {
                        name: 'None',
                        children: [
                            { name: '2', value: 0 },
                            { name: '2', value: 0 },
                            { name: '2', value: 0 },
                            { name: '2', value: 0 },
                            { name: '2', value: 0 },
                        ]
                    }
                ],
                symbolSize: false,
            }
        ]
    }
}