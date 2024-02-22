import { Button } from "./ui/button";
import { Check, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function CreateTagForm() {
    return (
        <form className="w-full space-y-6" >
            <div className="flex flex-col gap-[10px]">
                <label className="text-sm font-medium" htmlFor="itext"> Tag name </label>
                <input 
                    type="text" 
                    name="text" 
                    id="itext" 
                    className="bg-zinc-800/50 py-2 px-3 rounded-lg border border-zinc-800 w-full text-sm text-zinc-200" 
                />
            </div>

            <div className="flex flex-col gap-[10px]">
                <label> Slug</label>
                <input 
                    type="text" 
                    name="text" 
                    id="itext" 
                    readOnly 
                    className="bg-zinc-800/50 py-2 px-3 rounded-lg border border-zinc-800 w-full text-sm text-zinc-200" 
                />
            </div>

            <div className="flex items-center justify-end gap-2">
                <Button>
                    <X className="size-3"/>
                    Cancel
                </Button>
                <Button type="submit" className="bg-teal-400 text-teal-950">
                    <Check className="size-3"/>
                    Save
                </Button>
            </div>
        </form>

    )
}