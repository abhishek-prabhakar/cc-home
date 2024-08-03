import { Group, Select, Text } from "@mantine/core";

const sortPanelStyles: React.CSSProperties = {
    background: "var(--ui-color-accent)",
    padding: "10px 20px",
    borderRadius: "4px",
};


export enum SORT_BY {
    LOWEST_PRICE = 'LOWEST_PRICE',
    HIGHEST_PRICE = 'HIGHEST_PRICE',
    RATING = 'RATING'
}

const list = [
    { value: SORT_BY.LOWEST_PRICE, label: "Lowest Price" },
    { value: SORT_BY.HIGHEST_PRICE, label: "Highest Price" },
    { value: SORT_BY.RATING, label: "Rating" },
]


function ListSortBar({ onSort }: { onSort: (v: string | null) => void }) {
    function setValue(v: string | null) {
        onSort(v);
    }


    return <div style={sortPanelStyles}>
        <Group align={'center'} gap={'sm'}>
            <Text c="dimmed" size="sm">Sort By:</Text>
            <Select placeholder="Default"
                defaultValue="0"
                onChange={x => setValue(x)}
                data={list}
                allowDeselect={false}
                w={150}
            />
        </Group>
    </div>
}

export default ListSortBar;