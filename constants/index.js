export const adminSidebarLinks = [
  {
    imgUrl: "/assets/tickets.svg",
    route: "/admin/add-film",
    label: "Add Film",
  },
  {
    imgUrl: "/assets/tickets.svg",
    route: "/admin/browse-films",
    label: "Browse Films",
  },
  {
    imgUrl: "/assets/tickets.svg",
    route: "/admin/users",
    label: "Users",
  },
  {
    imgUrl: "/assets/tickets.svg",
    route: "/admin/statistics",
    label: "Statistics",
  },
];

export const MPARatings = ["G", "PG", "PG-13", "R", "NC-17"];

function generateSeats(numRows, seatsPerRow) {
  const seats = [];

  for (let row = 1; row <= numRows; row++) {
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      seats.push({
        row: row,
        seat: seat,
        isBooked: false,
      });
    }
  }

  return seats;
}

export const rooms = {
  big: generateSeats(10, 16),
  small: generateSeats(8, 13),
};

export const audioOptions = ["subtitles EN", "dubbing", "original"];
