(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) throw new Error("This extension must run unsandboxed");

    const API_URL = "https://freeai.logise1123.workers.dev/";

    class GaiaAI {
        constructor() {
            this.histories = {};
            this.model = 'llama-3.1-8b-instruct-fast';
            this.nextImage = null;
        }

        getInfo() {
            return {
                id: 'gaiaAI',
                name: 'GaiaAI',
color1: '#5c6fff',
color2: '#4e37fb',
color3: '#233090',
menuIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNDIiIGhlaWdodD0iMjI3IiB2aWV3Qm94PSIwLDAsMjQyLDIyNyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5OSwtNjYuNSkiPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNNDQxLDE4MGMwLDYyLjY4NDMyIC01NC4xNzM1NSwxMTMuNSAtMTIxLDExMy41Yy02Ni44MjY0NSwwIC0xMjEsLTUwLjgxNTY4IC0xMjEsLTExMy41YzAsLTYyLjY4NDMyIDU0LjE3MzU1LC0xMTMuNSAxMjEsLTExMy41YzY2LjgyNjQ1LDAgMTIxLDUwLjgxNTY4IDEyMSwxMTMuNXoiIGZpbGw9IiM0ZDUyZmYiIHN0cm9rZS13aWR0aD0iTmFOIi8+PHBhdGggZD0iTTQwNC41Mzk2MywxNjIuMDg1MzVjMTQuNDg4MzMsMTYuMDM2NDcgMTYuOTY3ODIsMzkuNTkxNTcgNi4xMzA4Niw1OC4yOTI1NWMtNy4wMTI4NiwxMi4zMTcyNCAtMTguOTk3MDUsMjEuMDA3NzcgLTMyLjg4MDkyLDIzLjg1MTE1Yy02LjY0ODk3LDIwLjU4MjE4IC0yNS44MzEwNSwzNC41MDkyNCAtNDcuNDU1NiwzNC40NTM3M2MtMTQuMTY3NiwwLjA5MjUyIC0yNy42ODc1NywtNS45MzM0OSAtMzcuMDg3NDEsLTE2LjUyOTljLTIxLjE0MzQ2LDQuNTM5NTYgLTQyLjc5MjY5LC01LjEwNjk5IC01My41NjE3OSwtMjMuODU3MzJjLTcuMTYwOSwtMTIuMjI0NzIgLTguNzAyODYsLTI2Ljk0NzQzIC00LjIyNDk5LC00MC4zODcyMmMtMTQuNDk0NSwtMTYuMDM2NDcgLTE2Ljk2NzgyLC0zOS42MTAwNyAtNi4xMTg1MiwtNTguMzExMDVjNy4wMTI4NiwtMTIuMzE3MjQgMTguOTk3MDUsLTIxLjAwNzc3IDMyLjg4MDkyLC0yMy44NTExNWM2LjY0ODk3LC0yMC41NjM2OSAyNS44MjQ4OCwtMzQuNDc4MzkgNDcuNDM3MSwtMzQuNDI5MDZjMTQuMTY3NiwtMC4wODYzNSAyNy42ODE0LDUuOTM5NjYgMzcuMDg3NDEsMTYuNTM2MDZjMjEuMTQzNDYsLTQuNTM5NTYgNDIuNzkyNjksNS4xMDY5OSA1My41NjE3OSwyMy44NTczMmM3LjE2MDksMTIuMjI0NzIgOC43MDI4NiwyNi45NDc0MyA0LjIyNDk5LDQwLjM4NzIyek0zNjcuMjk4MDMsMjI4Ljc5NzA1di00NS44ODI4Yy0wLjAyNDY3LC0wLjE5NzM3IC0wLjE0MTg2LC0wLjM3MDA4IC0wLjMyMDczLC0wLjQ1NjQybC0xNi42MTAwOCwtOS41OTEwM3Y1NS40MDU5OWMwLjAxMjM0LDIuMzEyOTUgLTEuMjIxMjQsNC40NTMyIC0zLjIzMTk2LDUuNTk0MjZsLTM5LjMwMTY3LDIyLjY5Nzc3Yy0wLjMzOTIzLDAuMjA5NzEgLTAuODYzNSwwLjQ5OTYgLTEuMTY1NzMsMC42NTk5NmM2LjY0MjgsNS41NDQ5MiAxNS4wMjQ5Myw4LjU3MzM1IDIzLjY3ODQ2LDguNTYxMDFjMjAuNDAzMzIsLTAuMDQzMTggMzYuOTI3MDUsLTE2LjU4NTQgMzYuOTUxNzEsLTM2Ljk4ODcyek0yNTAuODg1NjMsMjMxLjg0Mzk4YzEwLjIzMjUsMTcuNjcwOTUgMzIuODMxNTgsMjMuNzI3OCA1MC41MjcyLDEzLjUzODQ3bDM5LjcyNzI2LC0yMi45MzgzMWMwLjE1NDIsLTAuMTIzMzYgMC4yNDY3MiwtMC4zMTQ1NiAwLjIzNDM4LC0wLjUxMTkzdi0xOS4xODIwOGwtNDcuOTc5ODcsMjcuNzA2MDhjLTEuOTk4MzksMS4xNjU3MyAtNC40NjU1NCwxLjE2NTczIC02LjQ1Nzc2LDBsLTM5LjMwMTY3LC0yMi42OTc3N2MtMC4zNjM5MSwtMC4yMDk3MSAtMC44NzU4NCwtMC41MjQyNyAtMS4xNjU3MywtMC42OTY5N2MtMS40ODY0Niw4LjUxNzgzIDAuMDc0MDEsMTcuMjk0NzEgNC40MTAwMywyNC43ODI1MXpNMjQwLjUyOTc4LDE0Ni4wNjEyM2MtMTAuMTc2OTgsMTcuNjg5NDUgLTQuMTIwMTQsNDAuMjgyMzcgMTMuNTM4NDcsNTAuNTA4NjlsMzkuNzMzNDMsMjIuOTU2ODFjMC4xODUwMywwLjA4MDE4IDAuMzk0NzQsMC4wNjE2NyAwLjU2MTI4LC0wLjA0OTM1bDE2LjYxMDA4LC05LjU5MTAzbC00Ny45Nzk4NywtMjcuNjk5OTFjLTIuMDA0NTYsLTEuMTQxMDYgLTMuMjM4MTMsLTMuMjgxMzEgLTMuMjI1NzksLTUuNTg4MDl2LTQ1LjQwMTdjMCwtMC40MTk0MSAwLjAxODUxLC0xLjAxNzcgMC4wMTg1MSwtMS4zNTY5M2MtOC4xMTY5MiwyLjk3OTA4IC0xNC45MzI0Miw4LjcxNTIgLTE5LjI0OTkyLDE2LjIxNTMzek0zNzcuMDEyNDIsMTc3LjgxMzQzYzEuOTk4MzksMS4xNDcyMyAzLjIyNTc5LDMuMjgxMzEgMy4yMDcyOSw1LjU4ODA5djQ2Ljc1ODYzYzguMTEwNzUsLTIuOTg1MjUgMTQuOTIwMDgsLTguNzIxMzcgMTkuMjQzNzUsLTE2LjIwOTE2YzEwLjIyMDE2LC0xNy42ODk0NSA0LjE1NzE1LC00MC4zMTkzNyAtMTMuNTMyMzEsLTUwLjUzOTUzbC0zOS43MzM0MywtMjIuOTM4MzFjLTAuMTg1MDMsLTAuMDgwMTggLTAuMzk0NzQsLTAuMDYxNjcgLTAuNTYxMjgsMC4wNDkzNWwtMTYuNjEwMDgsOS41ODQ4N2w0Ny45Nzk4NywyNy43MDYwOHpNMzkzLjUyMzgyLDE1Mi45MzIyNGMxLjQ2MTc5LC04LjUwNTQ5IC0wLjA5ODY4LC0xNy4yNTc3IC00LjQxMDAzLC0yNC43MzMxNmMtMTAuMjAxNjYsLTE3LjcwMTc5IC0zMi44MjU0MSwtMjMuNzc3MTQgLTUwLjUyMTAzLC0xMy41NjkzMmwtMzkuNzI3MjYsMjIuOTE5ODFjLTAuMTU0MiwwLjEyMzM2IC0wLjI0NjcyLDAuMzE0NTYgLTAuMjM0MzgsMC41MTE5M3YxOS4xODIwOGw0Ny45Nzk4NywtMjcuNzA2MDhjMS45OTgzOSwtMS4xNjU3MyA0LjQ2NTU0LC0xLjE2NTczIDYuNDU3NzYsMGwzOS4zMDE2NywyMi42OTc3N2MwLjM2MzkxLDAuMjA5NzEgMC44NzU4NCwwLjUxODEgMS4xNjU3MywwLjY5Njk3ek0yODkuNjAxMzYsMTg3LjEwODQxbDAuMDI0NjcsLTU1LjM4MTMxYy0wLjAxMjM0LC0yLjMxMjk1IDEuMjIxMjQsLTQuNDQ3MDMgMy4yMzE5NiwtNS41ODgwOWwzOS4zMDE2NywtMjIuNjk3NzdjMC4zNDU0LC0wLjIwOTcxIDAuODYzNSwtMC40OTk2IDEuMTY1NzMsLTAuNjU5OTZjLTYuNjQyOCwtNS41MjY0MiAtMTUuMDA2NDMsLTguNTYxMDEgLTIzLjY0NzYyLC04LjU2MTAxYy0yMC40Mjc5OSwtMC4wMTIzNCAtMzcuMDAxMDYsMTYuNTQyMjMgLTM3LjAxMzQsMzYuOTcwMjJ2NDUuODgyOGMwLjAyNDY3LDAuMTk3MzcgMC4xNDE4NiwwLjM3MDA4IDAuMzIwNzMsMC40NTY0MmwxNi42MTYyNSw5LjU5MTAzek0yOTguNjI0OTUsMTkyLjMzODc2bDIxLjM3MTY3LDEyLjMzNTc0bDIxLjM3MTY3LC0xMi4zMzU3NHYtMjQuNjc3NjVsLTIxLjM3MTY3LC0xMi4zMzU3NGwtMjEuMzcxNjcsMTIuMzQxOTF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPg==",
blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzEuNzUxMzciIGhlaWdodD0iMTc0LjA1ODY5IiB2aWV3Qm94PSIwLDAsMTcxLjc1MTM3LDE3NC4wNTg2OSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNC4xMjQzMSwtOTIuOTcwNjYpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTM5NC41NTU1NSwxNjQuMjAxMDZjMTIuNzc3MjcsMTQuMTQyNTcgMTQuOTYzOTMsMzQuOTE1ODMgNS40MDY4MSw1MS40MDgyNGMtNi4xODQ2NSwxMC44NjI1OCAtMTYuNzUzNTEsMTguNTI2NzcgLTI4Ljk5NzcxLDIxLjAzNDM1Yy01Ljg2MzczLDE4LjE1MTQ0IC0yMi43ODA0MiwzMC40MzM3MiAtNDEuODUxMTMsMzAuMzg0NzdjLTEyLjQ5NDQyLDAuMDgxNTkgLTI0LjQxNzY5LC01LjIzMjc1IC0zMi43MDc0MSwtMTQuNTc3NzNjLTE4LjY0NjQzLDQuMDAzNDQgLTM3LjczODksLTQuNTAzODYgLTQ3LjIzNjE4LC0yMS4wMzk3OWMtNi4zMTUyLC0xMC43ODA5OSAtNy42NzUwNiwtMjMuNzY0OTYgLTMuNzI2MDIsLTM1LjYxNzUyYy0xMi43ODI3MSwtMTQuMTQyNTcgLTE0Ljk2MzkzLC0zNC45MzIxNSAtNS4zOTU5MywtNTEuNDI0NTZjNi4xODQ2NSwtMTAuODYyNTggMTYuNzUzNTEsLTE4LjUyNjc3IDI4Ljk5NzcxLC0yMS4wMzQzNWM1Ljg2MzczLC0xOC4xMzUxMyAyMi43NzQ5OCwtMzAuNDA2NTIgNDEuODM0ODEsLTMwLjM2MzAxYzEyLjQ5NDQyLC0wLjA3NjE1IDI0LjQxMjI1LDUuMjM4MTkgMzIuNzA3NDEsMTQuNTgzMTZjMTguNjQ2NDMsLTQuMDAzNDQgMzcuNzM4OSw0LjUwMzg2IDQ3LjIzNjE4LDIxLjAzOTc5YzYuMzE1MiwxMC43ODA5OSA3LjY3NTA2LDIzLjc2NDk2IDMuNzI2MDIsMzUuNjE3NTJ6TTM2MS43MTIxNiwyMjMuMDM0MTV2LTQwLjQ2NDA3Yy0wLjAyMTc2LC0wLjE3NDA2IC0wLjEyNTExLC0wLjMyNjM3IC0wLjI4Mjg1LC0wLjQwMjUybC0xNC42NDg0NCwtOC40NTgzNHY0OC44NjI1OGMwLjAxMDg4LDIuMDM5NzkgLTEuMDc3MDEsMy45MjcyOCAtMi44NTAyNyw0LjkzMzU4bC0zNC42NjAxNywyMC4wMTcxOGMtMC4yOTkxNywwLjE4NDk0IC0wLjc2MTUyLDAuNDQwNiAtMS4wMjgwNiwwLjU4MjAyYzUuODU4MjksNC44OTAwNyAxMy4yNTA1LDcuNTYwODQgMjAuODgyMDUsNy41NDk5NmMxNy45OTM3LC0wLjAzODA4IDMyLjU2NTk5LC0xNC42MjY2OCAzMi41ODc3NCwtMzIuNjIwMzh6TTI1OS4wNDc5OCwyMjUuNzIxMjRjOS4wMjQwNSwxNS41ODQwMiAyOC45NTQxOSwyMC45MjU1NiA0NC41NTk5NywxMS45Mzk1OWwzNS4wMzU1LC0yMC4yMjkzMWMwLjEzNTk5LC0wLjEwODc5IDAuMjE3NTgsLTAuMjc3NDEgMC4yMDY3LC0wLjQ1MTQ3di0xNi45MTY2OWwtNDIuMzEzNDgsMjQuNDM0MDFjLTEuNzYyMzgsMS4wMjgwNiAtMy45MzgxNiwxLjAyODA2IC01LjY5NTEsMGwtMzQuNjYwMTcsLTIwLjAxNzE4Yy0wLjMyMDkzLC0wLjE4NDk0IC0wLjc3MjQsLTAuNDYyMzUgLTEuMDI4MDYsLTAuNjE0NjZjLTEuMzEwOTEsNy41MTE4OCAwLjA2NTI3LDE1LjI1MjIyIDMuODg5MjEsMjEuODU1NzF6TTI0OS45MTUxNSwxNTAuMDY5MzdjLTguOTc1MDksMTUuNjAwMzQgLTMuNjMzNTUsMzUuNTI1MDUgMTEuOTM5NTksNDQuNTQzNjVsMzUuMDQwOTQsMjAuMjQ1NjNjMC4xNjMxOCwwLjA3MDcxIDAuMzQ4MTIsMC4wNTQzOSAwLjQ5NDk5LC0wLjA0MzUybDE0LjY0ODQ0LC04LjQ1ODM0bC00Mi4zMTM0OCwtMjQuNDI4NTdjLTEuNzY3ODIsLTEuMDA2MyAtMi44NTU3MSwtMi44OTM3OSAtMi44NDQ4MywtNC45MjgxNHYtNDAuMDM5NzljMCwtMC4zNjk4OCAwLjAxNjMyLC0wLjg5NzUxIDAuMDE2MzIsLTEuMTk2NjhjLTcuMTU4MzIsMi42MjcyNSAtMTMuMTY4OTEsNy42ODU5NCAtMTYuOTc2NTIsMTQuMzAwMzF6TTM3MC4yNzkyOSwxNzguMDcxNjZjMS43NjIzOCwxLjAxMTc0IDIuODQ0ODMsMi44OTM3OSAyLjgyODUxLDQuOTI4MTR2NDEuMjM2NDdjNy4xNTI4OCwtMi42MzI2OSAxMy4xNTgwMywtNy42OTEzOCAxNi45NzEwOCwtMTQuMjk0ODdjOS4wMTMxNywtMTUuNjAwMzQgMy42NjYxOSwtMzUuNTU3NjggLTExLjkzNDE1LC00NC41NzA4NWwtMzUuMDQwOTQsLTIwLjIyOTMxYy0wLjE2MzE4LC0wLjA3MDcxIC0wLjM0ODEyLC0wLjA1NDM5IC0wLjQ5NDk5LDAuMDQzNTJsLTE0LjY0ODQ0LDguNDUyOWw0Mi4zMTM0OCwyNC40MzQwMXpNMzg0Ljg0MDcsMTU2LjEyODkyYzEuMjg5MTUsLTcuNTAxIC0wLjA4NzAzLC0xNS4yMTk1OCAtMy44ODkyMSwtMjEuODEyMTljLTguOTk2ODUsLTE1LjYxMTIyIC0yOC45NDg3NSwtMjAuOTY5MDggLTQ0LjU1NDUzLC0xMS45NjY3OWwtMzUuMDM1NSwyMC4yMTNjLTAuMTM1OTksMC4xMDg3OSAtMC4yMTc1OCwwLjI3NzQxIC0wLjIwNjcsMC40NTE0N3YxNi45MTY2OWw0Mi4zMTM0OCwtMjQuNDM0MDFjMS43NjIzOCwtMS4wMjgwNiAzLjkzODE2LC0xLjAyODA2IDUuNjk1MSwwbDM0LjY2MDE3LDIwLjAxNzE4YzAuMzIwOTMsMC4xODQ5NCAwLjc3MjQsMC40NTY5MSAxLjAyODA2LDAuNjE0NjZ6TTI5My4xOTE0MSwxODYuMjY4OTFsMC4wMjE3NiwtNDguODQwODJjLTAuMDEwODgsLTIuMDM5NzkgMS4wNzcwMSwtMy45MjE4NCAyLjg1MDI3LC00LjkyODE0bDM0LjY2MDE3LC0yMC4wMTcxOGMwLjMwNDYxLC0wLjE4NDk0IDAuNzYxNTIsLTAuNDQwNiAxLjAyODA2LC0wLjU4MjAyYy01Ljg1ODI5LC00Ljg3Mzc1IC0xMy4yMzQxOCwtNy41NDk5NiAtMjAuODU0ODUsLTcuNTQ5OTZjLTE4LjAxNTQ2LC0wLjAxMDg4IC0zMi42MzEyNiwxNC41ODg2IC0zMi42NDIxNCwzMi42MDQwNnY0MC40NjQwN2MwLjAyMTc2LDAuMTc0MDYgMC4xMjUxMSwwLjMyNjM3IDAuMjgyODUsMC40MDI1MmwxNC42NTM4OCw4LjQ1ODM0ek0zMDEuMTQ5MzIsMTkwLjg4MTU2bDE4Ljg0NzY5LDEwLjg3ODlsMTguODQ3NjksLTEwLjg3ODl2LTIxLjc2MzI0bC0xOC44NDc2OSwtMTAuODc4OWwtMTguODQ3NjksMTAuODg0MzR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODUuODc1Njg1NTM2MjkyNDU6ODcuMDI5MzQyNjA2MDYzMS0tPg==",
                blocks: [
                    { blockType: Scratch.BlockType.LABEL, text: 'Configuration' },
                    { 
                        opcode: 'set_model', 
                        blockType: Scratch.BlockType.COMMAND, 
                        text: 'Set model to [MODEL]', 
                        arguments: { 
                            MODEL: { 
                                type: Scratch.ArgumentType.STRING, 
                                menu: 'modelMenu',
                                defaultValue: 'gpt-5.2-chat-latest'
                            } 
                        } 
                    },
                    { 
                        opcode: 'get_current_model', 
                        blockType: Scratch.BlockType.REPORTER, 
                        text: 'current model' 
                    },
                    { 
					blockType: Scratch.BlockType.LABEL,
					text: 'Model Status:'
					},
                    {
						blockType: Scratch.BlockType.LABEL,
						text: 'https://discord.gg/d2GzE9WZJR'
						},
                    {
						blockType: Scratch.BlockType.LABEL,
						text: 'Message Management'
						},
                    {
						blockType: Scratch.BlockType.LABEL,
						text:
						'Edited by Gaia'
						},
                    {
						opcode: 'get_prompt',
						blockType: Scratch.BlockType.REPORTER,
						text: 'Get prompt [TYPE]',
						arguments: {
							TYPE: {
								type: Scratch.ArgumentType.STRING,
								menu: 'promptMenu'
								  }
								 }
								},
                    {
						opcode: 'generate_text_nocontext',
						blockType: Scratch.BlockType.REPORTER,
						text: 'Generate from text (No Context): [PROMPT]',
						arguments: {
							PROMPT: {
								type: Scratch.ArgumentType.STRING
								  }
								 }
								},
                    {
						opcode: 'send_text_to_chat',
						blockType: Scratch.BlockType.REPORTER,
						text: 'Send text [PROMPT] to [chatID]',
						arguments: {
							PROMPT: {
								type: Scratch.ArgumentType.STRING
								},
								chatID: {
									type: Scratch.ArgumentType.STRING
									  }
									 }
									},
                    { 
					opcode: 'attach_image',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Attach Image [URL] to next message',
					arguments: {
						URL: {
							type: Scratch.ArgumentType.STRING
							  }
							 }
							},
                    { 
					opcode: 'inform_chat',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Inform [chatID] that [inform]',
					arguments: {
						chatID: {
							type: Scratch.ArgumentType.STRING
							},
							inform: {
								type: Scratch.ArgumentType.STRING
								  }
								 }
								},
                    { 
					opcode: 'generate_image',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Generate Image [PROMPT]',
					arguments: {
						PROMPT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Penguin in Space',
							  }
							 }
							},
                    { 
					blockType: Scratch.BlockType.LABEL,
					text: 'Chatbot Management' 
					},
                    { 
					opcode: 'create_chatbot',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Create chatbot named [chatID]',
					arguments: {
						chatID: {
							type: Scratch.ArgumentType.STRING
							  }
							 }
							},
                    { 
					opcode: 'delete_chatbot', blockType: Scratch.BlockType.COMMAND,
					text: 'Delete chatbot [chatID]',
					arguments: {
						chatID: {
							type: Scratch.ArgumentType.STRING
							  }
							 }
							},
                    { 
					opcode: 'reset_chat',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Reset chat history of [chatID]',
					arguments: {
						chatID: {
							type: Scratch.ArgumentType.STRING
							  }
							 }
							},
                    { 
					opcode: 'get_chat_history',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Chat history of [chatID] as Array',
					arguments: {
						chatID: {
							type: Scratch.ArgumentType.STRING
							  }
							 }
							},
                    { 
					opcode: 'import_history',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Import chat history from [json] as [chatID]',
					arguments: {
						json: {
							type: Scratch.ArgumentType.STRING
							},
							chatID: {
								type: Scratch.ArgumentType.STRING
								  }
								 }
								},
                    { 
					opcode: 'import_chats_merge',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Import chats from [json] and [merge]',
					arguments: {
						json: {
							type: Scratch.ArgumentType.STRING
							},
							merge: {
								type: Scratch.ArgumentType.STRING, menu: 'mergeTypes'
								  }
								 }
								},
                    { 
					opcode: 'all_chats',
					blockType: Scratch.BlockType.REPORTER,
					text: 'All chats as Arrays'
					},
                    { 
					opcode: 'active_chats',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Currently Active chats'
					}
                ],
                menus: {
                    modelMenu: [
                        { text: 'LLaMA 4 Scout 17B (Meta)', value: 'llama-4-scout-17b-16e-instruct' },
                        { text: 'LLaMA 3.3 70B FP8 (Meta)', value: 'llama-3.3-70b-instruct-fp8-fast' },
                        { text: 'LLaMA 3.1 8B Fast (Meta)', value: 'llama-3.1-8b-instruct-fast' },
                        { text: 'Gemma 3 12B (Google)', value: 'gemma-3-12b-it' },
                        { text: 'Mistral Small 3.1 24B (MistralAI)', value: 'mistral-small-3.1-24b-instruct' },
                        { text: 'QwQ 32B (Qwen)', value: 'qwq-32b' },
                        { text: 'Qwen2.5 Coder 32B (Qwen)', value: 'qwen2.5-coder-32b-instruct' },
                        { text: 'LLaMA Guard 3 8B (Meta)', value: 'llama-guard-3-8b' },
                        { text: 'DeepSeek R1 Distill Qwen 32B', value: 'deepseek-r1-distill-qwen-32b' },
                        { text: 'LLaMA 3.2 1B (Meta)', value: 'llama-3.2-1b-instruct' },
                        { text: 'LLaMA 3.2 3B (Meta)', value: 'llama-3.2-3b-instruct' },
                        { text: 'LLaMA 3.2 11B Vision (Meta)', value: 'llama-3.2-11b-vision-instruct' },
                        { text: 'LLaMA 3.1 8B AWQ (Meta)', value: 'llama-3.1-8b-instruct-awq' },
                        { text: 'LLaMA 3.1 8B FP8 (Meta)', value: 'llama-3.1-8b-instruct-fp8' },
                        { text: 'LLaMA 3.1 8B (Meta)', value: 'llama-3.1-8b-instruct' },
                        { text: 'Meta LLaMA 3 8B (Meta)', value: 'meta-llama-3-8b-instruct' },
                        { text: 'LLaMA 3 8B AWQ (Meta)', value: 'llama-3-8b-instruct-awq' },
                        { text: 'Cybertron 7B v2 (UNA)', value: 'una-cybertron-7b-v2-bf16' },
                        { text: 'LLaMA 3 8B (Meta)', value: 'llama-3-8b-instruct' },
                        { text: 'Mistral 7B Instruct v0.2', value: 'mistral-7b-instruct-v0.2' },
                        { text: 'Gemma 7B IT LoRA (Google)', value: 'gemma-7b-it-lora' },
                        { text: 'Gemma 2B IT LoRA (Google)', value: 'gemma-2b-it-lora' },
                        { text: 'LLaMA 2 7B Chat HF LoRA', value: 'llama-2-7b-chat-hf-lora' },
                        { text: 'Gemma 7B IT (Google)', value: 'gemma-7b-it' },
                        { text: 'Starling LM 7B Beta (Nexusflow)', value: 'starling-lm-7b-beta' },
                        { text: 'Hermes 2 Pro Mistral 7B', value: 'hermes-2-pro-mistral-7b' },
                        { text: 'Mistral 7B Instruct v0.2 LoRA', value: 'mistral-7b-instruct-v0.2-lora' },
                        { text: 'Qwen 1.5 1.8B Chat', value: 'qwen1.5-1.8b-chat' },
                        { text: 'Phi-2 (Microsoft)', value: 'phi-2' },
                        { text: 'TinyLLaMA 1.1B Chat v1.0', value: 'tinyllama-1.1b-chat-v1.0' },
                        { text: 'Qwen 1.5 14B Chat AWQ', value: 'qwen1.5-14b-chat-awq' },
                        { text: 'Qwen 1.5 7B Chat AWQ', value: 'qwen1.5-7b-chat-awq' },
                        { text: 'Qwen 1.5 0.5B Chat', value: 'qwen1.5-0.5b-chat' },
                        { text: 'DiscoLM German 7B v1 AWQ', value: 'discolm-german-7b-v1-awq' },
                        { text: 'Falcon 7B Instruct', value: 'falcon-7b-instruct' },
                        { text: 'OpenChat 3.5 0106', value: 'openchat-3.5-0106' },
                        { text: 'SQLCoder 7B 2', value: 'sqlcoder-7b-2' },
                        { text: 'DeepSeek Math 7B Instruct', value: 'deepseek-math-7b-instruct' },
                        { text: 'DeepSeek Coder 6.7B Instruct AWQ', value: 'deepseek-coder-6.7b-instruct-awq' },
                        { text: 'DeepSeek Coder 6.7B Base AWQ', value: 'deepseek-coder-6.7b-base-awq' },
                        { text: 'LLaMAGuard 7B AWQ', value: 'llamaguard-7b-awq' },
                        { text: 'Neural Chat 7B v3.1 AWQ', value: 'neural-chat-7b-v3-1-awq' },
                        { text: 'OpenHermes 2.5 Mistral 7B AWQ', value: 'openhermes-2.5-mistral-7b-awq' },
                        { text: 'LLaMA 2 13B Chat AWQ', value: 'llama-2-13b-chat-awq' },
                        { text: 'Mistral 7B Instruct v0.1 AWQ', value: 'mistral-7b-instruct-v0.1-awq' },
                        { text: 'Zephyr 7B Beta AWQ', value: 'zephyr-7b-beta-awq' },
                        { text: 'LLaMA 2 7B Chat FP16', value: 'llama-2-7b-chat-fp16' },
                        { text: 'Mistral 7B Instruct v0.1', value: 'mistral-7b-instruct-v0.1' },
                        { text: 'LLaMA 2 7B Chat INT8', value: 'llama-2-7b-chat-int8' },
                        { text: 'LLaMA 3.1 70B Instruct', value: 'llama-3.1-70b-instruct' },
                        { text: 'Gemini 2.5 Pro', value: 'gemini-2.5-pro' },
                        { text: 'Gemini 2.5 Flash', value: 'gemini-2.5-flash' },
                        { text: 'Gemini 2.5 Flash-Lite', value: 'gemini-2.5-flash-lite' },
                        { text: 'Gemini 2.5 Flash Image', value: 'gemini-2.5-flash-image' },
                        { text: 'Gemini 2.0 Flash', value: 'gemini-2.0-flash' },
                        { text: 'Gemini 2.0 Flash-Lite', value: 'gemini-2.0-flash-lite' },
                        { text: 'GPT-5.2', value: 'gpt-5.2' },
                        { text: 'GPT-5.2 (ChatGPT)', value: 'gpt-5.2-chat-latest' },
                        { text: 'GPT-5.2 Pro', value: 'gpt-5.2-pro' },
                        { text: 'GPT-5.2 Codex', value: 'gpt-5.2-codex' },
                        { text: 'GPT-5.2 Mini', value: 'gpt-5-mini' },
                        { text: 'GPT-5.2 Nano', value: 'gpt-5-nano' },
                        { text: 'GPT-5.1', value: 'gpt-5.1' },
                        { text: 'GPT 5', value: 'gpt-5' },
                        { text: 'GPT 4', value: 'gpt-4' },
                        { text: 'GPT 4 1066 Preview (Recent)', value: 'gpt-4-1106-preview' },
                        { text: 'GPT 4 0125 Preview (Turbo)', value: 'gpt-4-0125-preview' },
                        { text: 'GPT 3.5 Turbo', value: 'gpt-3.5-turbo' },
                        { text: 'Midjourney', value: 'midjourney' },
                        { text: 'DALL-E 3', value: 'dalle-3' },
                        { text: 'OpenJourney V4', value: 'openjourney-v4' },
                        { text: 'Dreamshaper 8', value: 'dreamshaper-8' },
                        { text: 'Anything V5', value: 'anything-v5' },
                        { text: 'Realistic Vision V5', value: 'realistic-vision-v5' },
                        { text: 'Sora 2 Pro', value: 'sora-2-pro' }
                    ],
                    imgModels: [
                        { text: 'GPT 3.5 Turbo', value: 'gpt-3.5-turbo' },
                        { text: 'Midjourney', value: 'midjourney' },
                        { text: 'DALL-E 3', value: 'dalle-3' },
                        { text: 'OpenJourney V4', value: 'openjourney-v4' },
                        { text: 'Dreamshaper 8', value: 'dreamshaper-8' },
                        { text: 'Anything V5', value: 'anything-v5' },
                        { text: 'Realistic Vision V5', value: 'realistic-vision-v5' },
                        { text: 'Sora 2 Pro', value: 'sora-2-pro' }
                    ],
                    vidModels: [
                        { text: 'Sora 2 Pro', value: 'sora-2-pro' }
                    ],
                    promptMenu: [
                        'Gibberish (probably does not work) By: u/Fkquaps',
                        'PenguinBot (Pre Circlelabs) By: JeremyGamer13',
                        'Facts About Pokémon: by Gaia',
                        'Scripts to Narrative Stories by Gaia',
                        'Stand Up Comedian (Character) By: devisasari',
                        'Lunatic (Character) By: devisasari',
                        'Lua Console From awesomegptprompts.com',
                        'Advertiser (Character) By: devisasari',
                        'Minecraft Commander (Idea from Greedy Allay)',
                        'Storyteller (Tells a story from any prompt) By: AdvAI',
                        'Friendly Tutor (Explains things simply) By: AdvAI',
                        'Rhyming Bot (All answers in rhyme) By: AdvAI',
                        'Translator (Translate to French) By: AdvAI',
                        'Emoji Bot (Only uses emojis to answer) By: AdvAI',
                        'Fact Checker (Checks if statement is true/false) By: AdvAI'
                    ],
                    mergeTypes: [
                        { text: 'Merge/Update existing chats', value: 'Merge/Update existing chats' },
                        { text: 'Remove all chatbots and import', value: 'Remove all chatbots and import' }
                    ]
                }
            };
        }

        // --- Nuevas funciones para gestionar el modelo ---
        set_model({ MODEL }) {
            this.model = MODEL;
        }

        get_current_model() {
            return this.model;
        }
        
        /**
         * Función auxiliar para procesar la imagen adjunta.
         * Obtiene la imagen de la URL, la convierte a un Data URL base64 y
         * construye el objeto de mensaje en el formato multimodal correcto.
         * @param {string} promptText El texto del prompt del usuario.
         * @returns {object} El objeto de mensaje del usuario, formateado para la API.
         */
        async _processImage(promptText) {
            // Si no hay imagen para adjuntar, devuelve un mensaje de texto simple.
            if (!this.nextImage) {
                return { role: 'user', content: promptText };
            }

            try {
                // Obtiene la imagen de la URL proporcionada.
                const response = await fetch(this.nextImage);
                if (!response.ok) {
                    throw new Error(`Error al obtener la imagen: ${response.statusText}`);
                }
                const blob = await response.blob();

                // Convierte el blob de la imagen a un Data URL (base64).
                const base64Url = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });

                // Construye el mensaje con el formato de contenido multimodal.
                return {
                    role: 'user',
                    content: [
                        { type: 'text', text: promptText },
                        {
                            type: 'image_url',
                            image_url: { url: base64Url }
                        }
                    ]
                };
            } catch (e) {
                console.error("The image could not be processed for the API call:", e);
                // If it fails, it reverts to a text-only message.
                return { role: 'user', content: promptText };
            } finally {
                // Clean up nextImage after attempting to use it, so that it is not used in the next request.
                this.nextImage = null;
            }
        }

        get_prompt({ TYPE }) {
            const prompts = {
                'Gibberish (probably does not work) By: u/Fkquaps': 'From now on you will respond everything replacing every letter of the alphabet with it rotated 13 places forward ...',
                'PenguinBot (Pre Circlelabs) By: JeremyGamer13': 'You are PenguinBot.\n\nYou live in Antarctica ...',
                'Facts About Pokémon: by Gaia': 'Make fun facts about Pokémon.',
                'Scripts to Narrative Stories by Gaia': 'I want you to convert a script I make ito a narrative story.',
                'Stand Up Comedian (Character) By: devisasari': 'I want you to act as a stand-up comedian. I will provide you with some topics ...',
                'Lunatic (Character) By: devisasari': 'I want you to act as a lunatic. The lunatic\'s sentences are meaningless ...',
                'Lua Console From awesomegptprompts.com': 'I want you to act as a lua console. I will type code and you will reply with what the lua console should show ...',
                'Advertiser (Character) By: devisasari': 'I want you to act as an advertiser. You will create a campaign ...',
                'Minecraft Commander (Idea from Greedy Allay)': 'I want you to act as a Minecraft AI command creator, dont add an intro or a outro to your response only the generated command, you will send things like "/give @s diamond 64", based on what the user wants, you can only use one command at a time so dont response with multiple commands, also of you dont or cant make it then just do /say (error), like "/say Unable to generate the command for this"',
                'Storyteller (Tells a story from any prompt) By: AdvAI': 'You are a creative storyteller. Whenever you receive a prompt, you reply with a short, imaginative story based on it. All your stories must be original and engaging.',
                'Rhyming Bot (All answers in rhyme) By: AdvAI': 'You must respond to every prompt using rhymes, like a poet. Make sure every answer is cheerful and fun!',
                'Friendly Tutor (Explains things simply) By: AdvAI': 'You are a patient and friendly tutor. You always explain things in simple terms, using analogies and step-by-step reasoning, and encourage questions.',
                'Translator (Translate to French) By: AdvAI': 'You are an expert translator. Translate everything the user says into French. Only reply with the translation, no explanations',
                'Emoji Bot (Only uses emojis to answer) By: AdvAI': 'You must answer only using emojis. No words allowed!',
                'Fact Checker (Checks if statement is true/false) By: AdvAI': 'You are a fact checker. When given a statement, respond with "True" or "False" and a brief explanation.'
            };
            return prompts[TYPE] || '';
        }

        async generate_text_nocontext({ PROMPT }) {
            const userMessage = await this._processImage(PROMPT);

            const body = {
                model: this.model, // Usa el modelo seleccionado
                messages: [userMessage]
            };

            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            return data?.choices?.[0]?.message?.content || "Error: no response";
        }
		

        async send_text_to_chat({ PROMPT, chatID }) {
            if (!this.histories[chatID]) this.histories[chatID] = [];

            const userMessage = await this._processImage(PROMPT);
            this.histories[chatID].push(userMessage);

            const body = {
                model: this.model, // Usa el modelo seleccionado
                messages: this.histories[chatID]
            };

            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            const reply = data?.choices?.[0]?.message?.content || "Error: no response";
            this.histories[chatID].push({ role: 'assistant', content: reply });
            return reply;
        }

        attach_image({ URL }) {
            this.nextImage = URL;
        }

        inform_chat({ chatID, inform }) {
            if (!this.histories[chatID]) this.histories[chatID] = [];
            this.histories[chatID].push({ role: 'system', content: inform });
        }

        create_chatbot({ chatID }) {
            if (!this.histories[chatID]) this.histories[chatID] = [];
        }

        delete_chatbot({ chatID }) {
            delete this.histories[chatID];
        }

        reset_chat({ chatID }) {
            this.histories[chatID] = [];
        }

        get_chat_history({ chatID }) {
            return JSON.stringify(this.histories[chatID] || []);
        }

        import_history({ json, chatID }) {
            try {
                this.histories[chatID] = JSON.parse(json);
            } catch (e) {
                console.error("Invalid JSON for chat history.");
            }
        }

        import_chats_merge({ json, merge }) {
            try {
                const newChats = JSON.parse(json);
                if (merge === 'Remove all chatbots and import') {
                    this.histories = newChats;
                } else {
                    for (const id in newChats) {
                        this.histories[id] = newChats[id];
                    }
                }
            } catch (e) {
                console.error("JSON inválido para los chats.");
            }
        }

        all_chats() {
            return JSON.stringify(this.histories);
        }

        active_chats() {
            return Object.keys(this.histories);
        }

        generate_image({ PROMPT }) {
            return `https://freeai.logise1123.workers.dev/image/${encodeURIComponent(PROMPT)}?raw=true`;
        }
    }

    Scratch.extensions.register(new GaiaAI());
})(Scratch);
