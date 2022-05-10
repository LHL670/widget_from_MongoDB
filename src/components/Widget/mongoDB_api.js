
export default function FromMongoDB(userID) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000/api/cguscholar/${userID}`,).then(function (data) {
            return data.json();
        }).then(json => {
            json ? resolve(json) : reject('No such document!');
        }).catch(console.error())
    })
}

