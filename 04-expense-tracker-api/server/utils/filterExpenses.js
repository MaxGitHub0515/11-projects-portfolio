

export const getDateFilter = (filter, startDate, endDate) => {
    const now = new Date();
    let dateQuery = {};

    switch(filter) {
        case "past_week":
            now.setDate(now.getDate() - 7);
            dateQuery = {$gte:now};
            break;
        case "last_month": 
            now.getMonth(now.getMonth() - 1);
            dateQuery = {$gte:now};
            break;
        case "last_3_months": 
            now.getMonth(now.getMonth() - 3);
            dateQuery = {$gte:now};
            break;
        case "custom":
            if(startDate && endDate) {
                dateQuery = {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                };
            }
            break;

        default:
            break;
    }
    return dateQuery;


}
