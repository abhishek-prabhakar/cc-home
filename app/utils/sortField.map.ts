import { SORT_BY } from "~/components/ListSortBar";

function sortFieldMapper(field: SORT_BY) {
    let sortBy: {
        cost?: 'asc' | 'desc'
    } = {};
    switch (field) {
        case SORT_BY.HIGHEST_PRICE:
            sortBy.cost = 'desc';
            break
        case SORT_BY.LOWEST_PRICE:
            sortBy.cost = 'asc'
            break
    }

    return sortBy;
}

export default sortFieldMapper;