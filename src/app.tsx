import { Plus,Search,FileDown, MoreHorizontal } from 'lucide-react'
import { Header } from './componentes/header.tsx'
import { Tabs } from './componentes/tabs.tsx'
import { Button } from './componentes/ui/button.tsx'
import { Input,Control } from './componentes/ui/input.tsx'
import { Table, TableHeader,TableRow,TableHead, TableBody,TableCell } from './componentes/ui/table'
import { Pagination } from './componentes/pagination.tsx'

export function App() {

  return (
    <div className="py-10 space-y-8">
      <header>
        <Header />
        <Tabs />
      </header>
      <main className="max-w-6xl mx-auto space-y-5">
        
        <div className='flex items-center gap-3'>
          <h1 className="text-xl font-bold">Tags</h1>

          <Button variant='primary'>
            <Plus className='size-3' />
            Create new
          </Button>

        </div>

        <div className='flex items-center justify-between'>
          <Input variant='filter'>
            <Search className='size-3' />
            <Control placeholder='Search tags...'/>
          </Input>

          <Button>
            <FileDown className='size-3' />
            Export
          </Button>

        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> </TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead> </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from( { length: 10}).map((value,index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-medium'>React</span>
                      <span className='text-xs text-zinc-500'>45a28d07-2b06-4f87-bd4c-7d7fe149821a</span>
                    </div>
                  </TableCell>
    
                  <TableCell className='text-zinc-500'>
                    13 video(s)
                  </TableCell>
    
                  <TableCell className='text-right'>
                    <Button size='icon'>
                      <MoreHorizontal className='size-4'/>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}

          </TableBody>

        </Table>
        
        {/* <Pagination/> */}
      </main>
    </div>
  )
}

