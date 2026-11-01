1. How did you ensure unique keys for your list items?

Each task already has its own id, so I used key={task.id} in TaskList when I mapped over the tasks. I learned that React needs the key to keep track of which card is which. I didn’t use the index number, because if you delete a task, the numbers shift and React can get mixed up.

2. What did you consider when implementing filtering?

I didn’t want filtering to actually delete tasks, so I left the full list alone and made a separate filtered list to show on the page. The “All” option was tricky, because the dropdown gives back an empty string. I had to change that to undefined so it means “don’t filter.” I also had to make each dropdown send both filters, or picking a priority would wipe out the status I already picked.

3. How did you handle state updates for status changes?

In App, I used map to go through the tasks and only change the one with the matching id. Everything else stays the same. I learned that you have to make a new list instead of changing the old one, or React won’t notice anything changed and won’t update the page.

4. What challenges did you face with conditional rendering?

Styling the tasks differently based on their status and priority took me a bit to figure out.
I ended up putting the status and priority right into the class name, so the CSS could pick them up.
TypeScript and dropdown values. A dropdown always gives back plain text, but my filter only allowed certain words.
I had to tell TypeScript to trust the value with as TaskStatus, and turn the empty “All” choice into undefined.
