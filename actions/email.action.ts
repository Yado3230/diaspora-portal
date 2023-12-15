// import fs from "fs";

// interface EmailTemplate {
//   id: string;
//   title: string;
//   body: string;
//   subject: string;
// }

// export const readTemplates = async (): Promise<EmailTemplate[]> => {
//   try {
//     const data = await fs.promises.readFile("email.json", "utf8");
//     return JSON.parse(data) as EmailTemplate[];
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const createTemplate = async (
//   newTemplate: EmailTemplate
// ): Promise<void> => {
//   try {
//     const templates = await readTemplates();
//     newTemplate.id = Math.random().toString(); // Generate unique ID
//     templates.push(newTemplate);
//     await fs.promises.writeFile("email.json", JSON.stringify(templates));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateTemplate = async (
//   updatedTemplate: EmailTemplate
// ): Promise<void> => {
//   try {
//     const templates = await readTemplates();
//     const index = templates.findIndex(
//       (template) => template.id === updatedTemplate.id
//     );
//     if (index > -1) {
//       templates[index] = updatedTemplate;
//       await fs.promises.writeFile("email.json", JSON.stringify(templates));
//     } else {
//       console.error(`Template with ID ${updatedTemplate.id} not found`);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteTemplate = async (id: string): Promise<void> => {
//   try {
//     const templates = await readTemplates();
//     const index = templates.findIndex((template) => template.id === id);
//     if (index > -1) {
//       templates.splice(index, 1);
//       await fs.promises.writeFile("email.json", JSON.stringify(templates));
//     } else {
//       console.error(`Template with ID ${id} not found`);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
