import {describe,it,expect} from 'vitest';
import {staySchema} from '@/lib/request-schema';
import {isApproved} from '@/lib/hotel';
describe('Hotel publication and availability rules',()=>{
 it('never publishes pending validation data',()=>{expect(isApproved('pending_validation')).toBe(false);expect(isApproved('approved')).toBe(true);});
 it('requires departure after arrival',()=>{expect(staySchema.safeParse({checkIn:'2026-12-01',checkOut:'2026-12-01',adults:1,children:0,rooms:1}).success).toBe(false);});
 it('requires at least one adult',()=>{expect(staySchema.safeParse({checkIn:'2026-12-01',checkOut:'2026-12-03',adults:0,children:0,rooms:1}).success).toBe(false);});
 it('requires at least one room',()=>{expect(staySchema.safeParse({checkIn:'2026-12-01',checkOut:'2026-12-03',adults:1,children:0,rooms:0}).success).toBe(false);});
});
