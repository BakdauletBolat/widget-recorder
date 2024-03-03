export class TimeSlotManager {
    timeSlots: any
    constructor() {
      this.timeSlots = {};
    }


    checkTimeSlot(startDate: Date, duration: number) {
      const startTime = startDate.getTime();
      const endTime = startTime + (duration - 1) * 60000;  // учитываем минуты
      // Проверяем доступность временных слотов
      for (let time = startTime; time < endTime; time += 60000) {
        if (this.timeSlots[time]) {
          return true; // Временной слот уже занят
        }
      }

      return false;
    }
  
    reserveTimeSlot(startDate: Date, duration: number) {
      const startTime = startDate.getTime();
      const endTime = startTime + duration * 60000; // учитываем минуты
      
      // Проверяем доступность временных слотов
      for (let time = startTime; time < endTime; time += 60000) {
        if (this.timeSlots[time]) {
          console.log(`Time slot ${new Date(time)} is already reserved.`);
          return false; // Временной слот уже занят
        }
      }
  
      // Резервируем временные слоты
      for (let time = startTime; time < endTime; time += 60000) {
        this.timeSlots[time] = true;
      }
  
      // console.log(`Time slot from ${startDate} for ${duration} minutes reserved successfully.`);
      return true;
    }

    reserveAllTimeSlot(startDate: Date, endDate: Date) {
      const startTime = startDate.getTime();
      const endTime = endDate.getTime();

      for (let time = startTime; time < endTime; time += 60000) {
        this.timeSlots[time] = new Date(time).toLocaleString()
      }
    }
  
    // Дополнительные методы, например, освобождение временного слота
    releaseTimeSlot(startDate: Date, duration: number) {
      const startTime = startDate.getTime();
      const endTime = startTime + duration * 60000; // учитываем минуты
  
      for (let time = startTime; time < endTime; time += 60000) {
        delete this.timeSlots[time];
      }
  
      console.log(`Time slot from ${startDate} for ${duration} minutes released.`);
    }
  }