class DateBlock {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'currentDate',
      name: 'Date',
	  color1: "#2BA6E1",
      blocks: [
        {
          opcode: 'currentDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current date',
        },
      ],
    };
  }

  currentDate() {
   // Get the current date
        const today = new Date();

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get the month name (using getMonth() which returns 0-11)
        const month = monthNames[today.getMonth()];

        // Get the day of the month
        const day = today.getDate();
        
      const year = today.getFullYear();

        // Format the date string
        const formattedDate = `${month} ${day}, ${year}`;
	  
            return formattedDate;
  }
}

Scratch.extensions.register(new DateBlock());