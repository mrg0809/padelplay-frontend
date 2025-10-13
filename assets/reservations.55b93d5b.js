import{s as i}from"./supabase.161424d9.js";const c=async(s,t)=>{const{data:r,error:e}=await i.from("reservations").select(`
          id,
          start_time,
          end_time,
          court_id,
          player_id,
          total_price,
          is_paid,
          courts(name),
          profiles(full_name),
          payment_orders(total_amount, payment_status, club_commission, player_commission, additional_items),
          matches(id)
      `).eq("reservation_date",s).eq("courts.club_id",t);if(e)throw new Error(e.message);return r},_=async(s,t=null,r=null)=>{let e=i.from("reservations").select(`
      id,
      reservation_date,
      start_time,
      end_time,
      courts(name, club_id),
      matches(event_type, gender, category)
    `).eq("courts.club_id",s).eq("status","active");t&&r?e=e.gte("reservation_date",t).lte("reservation_date",r):t&&(e=e.gte("reservation_date",t));const{data:o,error:a}=await e;if(a)throw new Error(a.message);return o};export{c as f,_ as g};
