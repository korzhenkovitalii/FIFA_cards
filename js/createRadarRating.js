export function createRadarRating(player) {
  return player.map(el => {
    const ctx = document.getElementById(`${el.id}`);

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'],
        datasets: [
          {
            label: 'Rating',
            fill: true,
           
            borderJoinStyle: '',
            data: [
              `${el.pase}`,
              `${el.shooting}`,
              `${el.passing}`,
              `${el.dribbling}`,
              `${el.defending}`,
              `${el.physical}`,
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        display: true,
      },
    });
  });
}
