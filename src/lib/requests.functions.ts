import { createServerFn } from '@tanstack/react-start';
import { requestSchema } from './request-schema';
export const submitRequest = createServerFn({method:'POST'}).inputValidator((input:unknown)=>requestSchema.parse(input)).handler(async({data})=>{
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const reference=`HIR-${crypto.randomUUID().slice(0,8).toUpperCase()}`;
 const {error}=await supabaseAdmin.from('booking_requests').insert({reference,kind:data.kind,full_name:data.fullName,email:data.email,phone:data.phone,check_in:data.checkIn ?? null,check_out:data.checkOut ?? null,adults:data.adults,children:data.children,rooms:data.rooms,room_category:data.roomCategory,company:data.company,message:data.message,consent:data.consent});
 if(error)throw new Error('Votre demande n’a pas pu être enregistrée. Veuillez réessayer.');
 return {reference,status:'awaiting_hotel_confirmation'};
});
