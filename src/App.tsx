import _ from 'lodash';

function App() {
    const arr = [1, 2, 3, 4, 5];
    const brr = _.map(arr, (data) => console.log(data));
    const crr = _.map(arr, (data, index) => {
        console.log(data);
        console.log(index);
        return data;
    });
    const drr = arr.map((data, index, rr) => {
        console.log(data);
        console.log(index);
        console.log(rr);
        return data;
    });

    return <></>;
}

export default App;
