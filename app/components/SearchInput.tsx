import { Input, Loader, Stack, Text } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Await, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { useDebouncedValue } from "@mantine/hooks";
import { FuseResult } from "fuse.js";
import { SearchResultItem } from "~/types";
import Routes from "~/routes.data";
import { IconSearch, IconX } from "@tabler/icons-react";

function SearchInput(){
    const fetcher = useFetcher<{ results: FuseResult<SearchResultItem>[], vendors: FuseResult<SearchResultItem>[], }>();
    const [searchBusy, setSearchBusy] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [debounced] = useDebouncedValue(searchValue, 200);

    useEffect(() => {
        setSearchBusy(fetcher.state === 'loading');
      }, [fetcher.state]);
  
      useEffect(() =>{
        if(debounced){
         search(debounced)
        }
      },[debounced]);
  
  
      function search(q: string) {
        if(!q){
            return;
        }
        setSearchBusy(true);
        fetcher.submit({
          q
        }, {
          method: 'get',
          action: '/search'
        })
      }

      function clearSearch(){
        setSearchValue('');
      }

    return <>
        <Stack gap={'sm'}>
                      <Text fw={500} c="dimmed">Get Started</Text>
                      <div style={{ background: 'white', padding: '6px 12px', borderRadius: '24px', boxShadow: '0 4px 4px #e1e1e1' }}>
                        <Input variant="unstyled" placeholder="Search" leftSection={searchBusy ? <Loader size={'xs'} /> : <IconSearch size={20} />} rightSection={searchValue? <IconX onClick={clearSearch}/>: ''} onChange={v => setSearchValue(v.target.value)} />
                      </div>
                    </Stack>
                    <div className="hero-search-results-panel-wrapper">
                      <Suspense fallback={<Skeleton />}>
                        <Await resolve={fetcher.data}> 
                          {response =>searchValue && <SearchResultList services={response?.results} vendors={response?.vendors}/>}
                        </Await>
                      </Suspense>
                    </div>
                </>
}



function SearchResultList({services, vendors}:{
    services?: FuseResult<SearchResultItem>[], vendors?: FuseResult<SearchResultItem>[]
  }){
    const navigate = useNavigate();
  
    function gotoSearchItemPage(type: string, id: string) {
      navigate(Routes.get('ServiceGroup', { id: type, subId: id }))
    }
  
    function gotoVendorProfile( id: string) {
      navigate(Routes.get('VendorProfile', { id}))
    }
  
  
    return <div className="hero-search-results-panel">
      {vendors?.map((item) => <div key={item.item.id} className="result-row" onClick={_ => gotoVendorProfile(item.item.id)}>
          {item.item.name} <Text c="dimmed" fs="italic">in {item.item.vendorType?.name}</Text>
      </div>)}
      {services?.map((item) => <div key={item.item.id} className="result-row" onClick={_ => gotoSearchItemPage(item.item.vendorType?.keyName || '', item.item.id)}>
          {item.item.name} <Text c="dimmed" fs="italic">in {item.item.vendorType?.name}</Text>
      </div>)}
      {!services?.length && !vendors?.length? <div className="result-row" > <Text c="dimmed" fs="italic">Sorry, we couldn't find any results on that. Kindly narrow the search term.</Text></div>: ''}
      </div>
  }

export default SearchInput;