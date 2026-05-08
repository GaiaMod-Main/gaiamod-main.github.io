const icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2Ni41NjYwMyIgaGVpZ2h0PSI1OS4yOTAzMyIgdmlld0JveD0iMCwwLDY2LjU2NjAzLDU5LjI5MDMzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjExLjEzMzk3LC0xMzAuNTAwNzcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNTMuNywxMzFjMC4zLC0wLjIgMC44LC0wLjEgMC45LDAuM2wyLjYsMTAuN2MwLDAgNi40LDQuNyA4LjMsOGMzLjIsNS41IDMuMywxMCAzLjMsMTBjMCwwIDcuMSwyLjEgOC4zLDcuOGMxLjIsNS43IC0zLjIsMTYuNSAtMjIsMjAuMmMtMTguOCwzLjcgLTMzLjksLTEuNCAtNDEsLTEyLjhjLTcuMSwtMTEuNCA0LjEsLTI1IDMuNSwtMjQuMmwtMi4xLC0xNy45Yy0wLjEsLTAuNCAwLjQsLTAuNyAwLjgsLTAuNWwxMi4xLDcuOWMwLDAgNC41LC0xLjcgOS4yLC0xLjljMi44LC0wLjIgNS4yLDAgNy41LDAuNHoiIGZpbGw9IiNmZmFiMTkiIHN0cm9rZT0iIzAwMTAyNiIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48cGF0aCBkPSJNMjY4LjUsMTYwLjRjMCwwIDYuOSwxLjggOC4xLDcuNWMxLjIsNS43IC0zLjYsMTYgLTIyLjIsMTkuNmMtMjQuMiw1IC0zNS43LC05LjQgLTI5LC0yMGM2LjcsLTEwLjcgMTguMiwtMS42IDI2LjYsLTIuMmM3LjIsLTAuNSA4LC02LjggMTYuNSwtNC45eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPg=="

class ScratchHub {
  constructor(runtime) {
    this.runtime = runtime
  }

    getInfo() {
    return {
      id: 'scratchhub',
      name: 'Scratch Hub',
      color1: '#ffbe00',
      color2: '#f6ab3c',
      color3: '#635c65',
      blockIconURI: icon,
	  
      blocks: [
	  
         {
          opcode: 'getUser',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [USER] json',
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ScratchCat',
            },
          }
        },
		{
          opcode: 'getProject',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get project [ID] json',
          arguments: {
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          }
        },
'---',
        {
          opcode: 'getUserInfo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [KEY] of [USER]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'INFO_LIST',
            },
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ScratchCat',
            },
          }
        },
        {
          opcode: 'getUserRanks',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [KEY] rank of [USER]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'STATS_LIST',
            },
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ScratchCat',
            },
          }
        },
        {
          opcode: 'getUserRanksByCountry',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [KEY] rank of [USER] by country',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'STATS_LIST',
            },
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ScratchCat',
            },
          }
        },
'---',
{
          opcode: 'getProjectInfo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [KEY] of project [ID]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'PROJECT_INFO_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          }
        },
        {
          opcode: 'getProjectRank',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get [KEY] rank of project [ID]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'PROJECT_RANK_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          }
        },
        {
          opcode: 'isProject',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is project [ID] [KEY]?',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'IS_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          }
        },
        {
          opcode: 'isRemix',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is project [ID] a [KEY]?',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'REMIX_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          },
        },
        {
          opcode: 'whenProject',
          blockType: Scratch.BlockType.REPORTER,
          text: 'When project [ID] is [KEY]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'WHEN_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          }
        },
        {
          opcode: 'getMetadata',
          blockType: Scratch.BlockType.REPORTER,
          text: '❌BROKEN FOR SOME FRIKIN REASON❌ Get [KEY] of project [ID]',
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: 'METADATA_LIST',
            },
            ID: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '867429996',
            },
          },
          hideFromPalette: true
        },
      ],
menus: {
        INFO_LIST: {
          acceptReporters: true,
          items: ['username', 'id', 'joined', 'country', 'bio', 'work', 'status', 'school', 'loves', 'favorites', 'comments', 'views', 'followers', 'following']
        },
        STATS_LIST: {
          acceptReporters: true,
          items: ['loves', 'favorites', 'comments', 'views', 'followers', 'following']
        },
        PROJECT_INFO_LIST: {
          acceptReporters: true,
          items: ['id', { text: 'creator', value: 'username' }, 'title', 'description', 'instructions', 'original project', 'parent', 'views', 'loves', 'favorites', 'comments']
        },
        PROJECT_RANK_LIST: {
          acceptReporters: true,
          items: ['views', 'loves', 'favorites']
        },
        IS_LIST: {
          acceptReporters: true,
          items: ['public', 'comments_allowed']
        },
        WHEN_LIST: {
          acceptReporters: true,
          items: ['created', 'modified', "shared"]
        },
        REMIX_LIST: {
          acceptReporters: true,
          items: ['remix', 'parent']
        },
        METADATA_LIST: {
          acceptReporters: true,
          items: ['version', 'costumes', 'blocks', 'variables', 'assets', 'hash', 'user_agents']
        },
      }
    };
  }

 async getUser(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/user/info/" + args.USER);
    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data);
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async getProject(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data);
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async getUserInfo(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/user/info/" + args.USER);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      switch (key) {
        case "original project":
          return data["remix"]["root"];
        case "parent":
          return data["remix"]["parent"];
        case "views":
          return data["statistics"][key]
        case "loves":
          return data["statistics"][key]
        case "favorites":
          return data["statistics"][key]
        case "comments":
          return data["statistics"][key]
        case "views":
          return data["statistics"][key]
        case "followers":
          return data["statistics"][key]
        case "following":
          return data["statistics"][key]
        default:
          return data[key];
      }
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
 async getUserRanks(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/user/info/" + args.USER);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data["statistics"]["ranks"][key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async getUserRanksByCountry(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/user/info/" + args.USER);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data["statistics"]["ranks"]["country"][key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
 async getProjectInfo(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      switch (key) {
        case "original project":
          return data["remix"]["root"];
        case "parent":
          return data["remix"]["parent"];
        //|| "loves" || "favorites" || "comments"
        case "views":
          return data["statistics"][key]
        case "loves":
          return data["statistics"][key]
        case "favorites":
          return data["statistics"][key]
        case "comments":
          return data["statistics"][key]
        default:
          return data[key];
      }
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
async getProjectRank(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data["statistics"]["ranks"][key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async isProject(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data[key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async isRemix(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      switch (key) {
        case "parent":
          if (data["remix"]["parent"] !== null) {
            return true;
          } else {
            return false
          }
        default:
          if (data["remix"]["root"] !== null) {
            return true;
          } else {
            return false
          }
      }
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async whenProject(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/project/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data["times"][key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
  async getMetadata(args) {
    const response = await fetch("https://scratchdb.lefty.one/v3/user/info/" + args.ID);
    let key = args.KEY;
    if (response.ok) {
      const data = await response.json();
      return data["metadata"][key];
    } else {
      console.error('Error:', response.status);
      return null;
    }
  }
}

Scratch.extensions.register(new ScratchHub());