export default function profileFormat(data) {
    var adjustFormat = {
        label: data.personalData.label,
        name: data.personalData.name,
        picture: data.personalData.picture,
        university: data.personalData.university,
        updateTime: data.updateTime,
        citations: data.cited.citations.All,
        h_index: data.cited.h_index.All
    }
    return adjustFormat
}