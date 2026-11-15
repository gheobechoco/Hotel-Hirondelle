import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover,PopoverContent,PopoverTrigger } from '@/components/ui/popover';
export function HotelDate({value,onChange,label}:{value:string;onChange:(v:string)=>void;label:string}){const [open,setOpen]=useState(false);return <Popover open={open} onOpenChange={setOpen}><PopoverTrigger asChild><Button variant="ghost" className="w-full justify-between px-0 font-normal" aria-label={label}>{value?format(new Date(value+'T12:00:00'),'dd MMM yyyy',{locale:fr}):'Choisir une date'}<CalendarDays className="text-muted-foreground"/></Button></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar locale={fr} mode="single" selected={value?new Date(value+'T12:00:00'):undefined} onSelect={d=>{if(d){onChange(format(d,'yyyy-MM-dd'));setOpen(false);}}} className="pointer-events-auto"/></PopoverContent></Popover>}
